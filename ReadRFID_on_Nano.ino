#include <SoftwareSerial.h>

#define NANO_RX 2 // RX (to ESP32 TX)
#define NANO_TX 3 // TX (to ESP32 RX)

SoftwareSerial NanoSerial(NANO_RX, NANO_TX); // SoftwareSerial for communication

void setup()
{
    Serial.begin(115200);   // USB Debugging
    NanoSerial.begin(9600); // Communication with ESP32

    Serial.println("🔄 Waiting for RFID data from ESP32...");
}

void loop()
{
    if (NanoSerial.available())
    {
        String message = NanoSerial.readStringUntil('\n');
        Serial.print("📡 Received from ESP32: ");
        Serial.println(message);
    }
}
