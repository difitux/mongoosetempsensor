# Temperature sensor with mongooseOS
Script sends temperature and humidity for DHT Shield and WEMOS D1 mini to MQTT broker

## Prerequisites
Install mongooseOS (https://mongoose-os.com/docs/quickstart/setup.html)

## Deployment
Configurate in [mos.yml](mos.yml):
* WIFI SSID and password
* MQTT broker address
* MQTT topic the data should be sent to
* Time for deep sleep

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
