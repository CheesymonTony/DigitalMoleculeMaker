void setup()
{
    Serial.begin(115200);
    pinMode(6, INPUT_PULLUP); // Green Button
    pinMode(7, INPUT_PULLUP); // Red Button
}

void loop()
{
    if (digitalRead(6) == LOW)
    {
        Serial.println("Green Button Pressed");
        delay(200); // Basic debounce
    }
    if (digitalRead(7) == LOW)
    {
        Serial.println("Red Button Pressed");
        delay(200);
    }
}