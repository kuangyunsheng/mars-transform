# 中国地图坐标纠偏

## 背景
GPS，WGS-84，原始坐标系。

一般用国际标准的GPS记录仪记录下来的坐标，都是GPS的坐标。很可惜，在中国，任何一个地图产品都不允许使用GPS坐标，据说是为了保密。

谷歌地图、高德、腾讯采用的是国测局GCJ-02坐标系。

百度用的是BD-09坐标系。

若要在地图上准确定位用WGS-84坐标的标记的位置，则需将先其转换为地图所使用的坐标系，再进行定位。

本项目在wgs2mars的基础上进一步封装，并参考coordTransform_py，增加GCJ-02与BD-09之间的相互转换

## 快速开始
引入node模块

    npm install mars-transform --save
    
使用

    const transform = require('mars-transform')

    //WGS-84转为GCJ-02
    transform.wgs2gcj(112,21)

    //GCJ-02转为WGS-84
    transform.gcj2wgs(112,21)

    //GCJ-02转为BD-09
    transform.gcj2bd(112,21)

    //BD-09转为GCJ-02
    transform.bd2gcj(112,21)

    //WGS-84转为BD-09
    transform.wgs2bd(112,21)

    //BD-09转为WGS-84
    transform.bd2wgs(112,21)

## 致谢

感谢wgs2mars、coordTransform_py等开源作者的贡献！

##免责声明

该项目对基于wgs2mars实现WGS-84间GCJ-02的转换，同时GCJ-02与BD-09的转换参考了coordTransform_py的算法，作者不对其准确性和合法性做保证。
**请在遵守国家保密法的前提下自行斟酌使用**。

