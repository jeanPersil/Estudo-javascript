import pyautogui as pg
import time

frase = "chama eu"

time.sleep(5)

for i in range(100):
    pg.write(frase + " numero {i}")
    pg.press("enter")