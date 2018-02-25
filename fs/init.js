// Load Mongoose OS API
load('api_config.js');
load('api_mqtt.js');
load('api_sys.js');
load('api_timer.js');
load("api_esp8266.js");
load('api_dht.js');

// GPIO pin (GPIO2 is pin D4 on D1 mini) which has a DHT sensor data wire connected
let pin = 2;
let time_deepsleep = Cfg.get('app.deepsleep');
let mqtt_topic = Cfg.get('app.mqtttopic');

// Initialize DHT library
let dht = DHT.create(pin, DHT.DHT22);

// This function reads data from the DHT sensor after 20 seconds (wifi connection should be established)
Timer.set(20000, 0, function() {
  let i = 0;
  let temp = 0;
  let humi = 0;

  // Mean value of five measurements is calculated and sent
  for(i = 1; i < 6; i++)
  {
    let t = dht.getTemp();
    let h = dht.getHumidity();
    
    if (isNaN(h) || isNaN(t)) {
      print('Failed to read data from sensor');
      return;
    }

    temp = temp + t;
    humi = humi + h;
    
  }
  temp=temp/(i-1);
  humi=humi/(i-1);

  // temperature and humitity is posted as json string to the mqtt broker
  let ok = MQTT.pub(mqtt_topic, JSON.stringify({temperature: temp,humidity: humi}), 1);
	if(ok) print('sent mqtt')
  else print('failed mqtt');

  // 2s after reading sensor values deep sleep is activated. After wake up the script start from the beginning
          
  Timer.set(2000 , false , function() {
    ESP8266.deepSleep(time_deepsleep);
  }, null);
  
  
}, null);



