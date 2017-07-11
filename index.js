const wgs2mars = require('wgs2mars')

//WGS-84转为GCJ-02
function wgs2gcj(lng_wgs, lat_wgs){
    let {lng, lat} = wgs2mars(lng_wgs, lat_wgs)
    return [lng, lat]
}

//GCJ-02转为WGS-84(采用近似算法p = 2*p0 - p')
function gcj2wgs(lng_gcj, lat_gcj){
    let {lng, lat} = wgs2mars(lng_gcj, lat_gcj)
    return [2*lng_gcj - lng, 2*lat_gcj - lat]
}

const x_pi = Math.PI * 3000.0 / 180.0 
const x_factor = 0.000003
const y_factor = 0.00002
const x_diff = 0.0065
const y_diff = 0.006

//GCJ-02坐标转为BD-09坐标
function gcj2bd(lng, lat)  
{  
    let z = Math.sqrt(lng * lng + lat * lat) + y_factor * Math.sin(lat * x_pi)  
    let theta = Math.atan2(lat, lng) + x_factor * Math.cos(lng * x_pi)  

    return [z * Math.cos(theta) + x_diff, z * Math.sin(theta) + y_diff]  
}  

//BD-09坐标转为GCJ-02坐标
function bd2gcj(lng, lat)  
{  
    lng -= x_diff
    lat -= y_diff
    let z = Math.sqrt(lng * lng + lat * lat) - y_factor * Math.sin(lat * x_pi)  
    let theta = Math.atan2(lat, lng) - x_factor * Math.cos(lng * x_pi)  

    return [z * Math.cos(theta), z * Math.sin(theta)]
}  

function wgs2bd(lng_wgs, lat_wgs){
    let {lng, lat} = wgs2mars(lng_wgs, lat_wgs)
    return gcj2bd(lng,lat)
}

function bd2wgs(lng_bd, lat_bd){
    let [lng_gcj, lat_gcj] = bd2gcj(lng_bd, lat_bd)
    return gcj2wgs(lng_gcj, lat_gcj)
}

module.exports = {
    bd2gcj,
    bd2wgs,
    gcj2bd,
    gcj2wgs,
    wgs2gcj,
    wgs2bd
}