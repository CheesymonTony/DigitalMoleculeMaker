#include <Keypad.h>
#include <Wire.h>
#include <LiquidCrystal_I2C.h>

// Pin connected to the relay
const int relayPin = 18;  // Using GPIO 18 for relay control
const int ledPin = 15;    // Pin connected to the green LED
const int signalPin = 23; // Added GPIO 23 for additional signal
bool locked = true;

// Initialize the LCD with I2C address
LiquidCrystal_I2C lcd(0x3F, 16, 2);

const byte ROWS = 4;
const byte COLS = 4;

byte rowPins[ROWS] = {13, 12, 14, 27}; // four rows
byte colPins[COLS] = {26, 25, 33, 32}; // four columns

char keys[4][4] = {
    {'1', '2', '3', 'A'},
    {'4', '5', '6', 'B'},
    {'7', '8', '9', 'C'},
    {'*', '0', '#', 'D'}};

Keypad keypad = Keypad(makeKeymap(keys), rowPins, colPins, ROWS, COLS);

// Variables to store input
String inputCode = "";       // To store the entered code
String correctCode = "B09C"; // Correct passcode

void setup()
{
    Serial.begin(115200);
    pinMode(ledPin, OUTPUT);
    pinMode(relayPin, OUTPUT);
    pinMode(signalPin, OUTPUT); // Set pin 23 as output

    digitalWrite(relayPin, LOW);  // Ensure the relay is initially off
    digitalWrite(ledPin, LOW);    // Ensure LED is off
    digitalWrite(signalPin, LOW); // Ensure signalPin is initially off

    Wire.begin(21, 22);
    lcd.init();
    lcd.backlight();

    lcd.setCursor(0, 0);
    lcd.print("Passcode"); // Initial display
}

void loop()
{
    if (locked)
    {
        char key = keypad.getKey(); // Get key press from keypad

        if (key != NO_KEY)
        {
            inputCode += key; // Append the key to the entered code
            lcd.clear();
            lcd.setCursor(0, 0);
            lcd.print(inputCode); // Display the entered keys

            // When 4 characters are entered, check the code
            if (inputCode.length() == 4)
            {
                if (inputCode == correctCode)
                {
                    lcd.clear();
                    lcd.setCursor(0, 0);
                    lcd.print("Access Granted");
                    locked = false;
                }
                else
                {
                    lcd.clear();
                    lcd.setCursor(0, 0);
                    lcd.print("Incorrect Seq");

                    delay(3000); // Show "Incorrect Sequence" for 3 seconds

                    // Reset the LCD display
                    lcd.clear();
                    lcd.setCursor(0, 0);
                    lcd.print("Passcode");
                }
                // Reset the inputCode for the next attempt
                inputCode = "";
            }
        }
    }
    else
    {
        // Turn on the relay and the LED
        digitalWrite(relayPin, HIGH);
        digitalWrite(ledPin, HIGH);
        digitalWrite(signalPin, HIGH); // Activate pin 23 as well
    }
}