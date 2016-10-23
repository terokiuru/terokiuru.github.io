#!/usr/bin/env python
# digital control interface code for radar
# by mikko metso, seifallah jardak
# VTT 2016

# from __future__ import division
# import pyperclip
import sys
import time
from datetime import datetime#, date, time
import serial
import os
from serial.tools import list_ports
import pyqtgraph as pg
# from pyqtgraph.Qt import QtCore
import numpy as np
from scipy.interpolate import interp1d
from scipy.ndimage import map_coordinates
import thread
import win32api
import matplotlib.pyplot as plt
import matplotlib
from scipy.signal import savgol_filter
from statsmodels.nonparametric.smoothers_lowess import lowess
import sounddevice as sd
import pyglet
import ftplib
import json
import simplejson


def main():


  print "alkoi"

  a = np.linspace(1,3,3)
  b = 2 * np.linspace(1,3,3)

  a = a.tolist()
  b = b.tolist()
  
  data = "[" + str(a) + "," + str(b) + "]"
 
  file = open("data.json", "w")
  file.write(data)
  file.close()

  fho = open("data.json","r")
  x,y = json.load(fho)
  fho.close()

  x = np.array(x)
  y = np.array(y)
  print x/y



  session = ftplib.FTP('ttkiuru.5gbfree.com','ttkiuru','2s1MY9cK')
  print session.pwd()
  session.cwd("public_html")
  print session.pwd()
  file = open('data.json','rb')                  # file to send
  session.storbinary('STOR data.json', file)     # send the file
  file.close()                                    # close file and FTP
  session.quit()
  print "loppui"

if __name__ == '__main__':
  main()
