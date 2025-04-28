import pyautogui as pg
import time

frase = "te amo!"

time.sleep(5)

for i in range(100):
    pg.write(frase)
    pg.press("enter")