# Temperature sensor with mongooseOS
Script sends temperature and humidity from WEMOS D1 mini with DHT Shield to MQTT broker

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
