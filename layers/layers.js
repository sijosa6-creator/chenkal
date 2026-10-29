var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_SLOPE_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'SLOPE<br />\
    <img src="styles/legend/SLOPE_2_0.png" /> 0<br />\
    <img src="styles/legend/SLOPE_2_1.png" /> 17.2161<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/SLOPE_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8580836.161771, 931965.129223, 8586887.301233, 936936.822014]
        })
    });
var format_GEOMOGPOLOGY_3 = new ol.format.GeoJSON();
var features_GEOMOGPOLOGY_3 = format_GEOMOGPOLOGY_3.readFeatures(json_GEOMOGPOLOGY_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GEOMOGPOLOGY_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEOMOGPOLOGY_3.addFeatures(features_GEOMOGPOLOGY_3);
var lyr_GEOMOGPOLOGY_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GEOMOGPOLOGY_3, 
                style: style_GEOMOGPOLOGY_3,
                popuplayertitle: 'GEOMOGPOLOGY',
                interactive: false,
    title: 'GEOMOGPOLOGY<br />\
    <img src="styles/legend/GEOMOGPOLOGY_3_0.png" /> Lower Plateau (Lateritic) - Dissected<br />\
    <img src="styles/legend/GEOMOGPOLOGY_3_1.png" /> Valley Fill<br />\
    <img src="styles/legend/GEOMOGPOLOGY_3_2.png" /> Water Body<br />\
    <img src="styles/legend/GEOMOGPOLOGY_3_3.png" /> <br />' });
var format_SOIL_4 = new ol.format.GeoJSON();
var features_SOIL_4 = format_SOIL_4.readFeatures(json_SOIL_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SOIL_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SOIL_4.addFeatures(features_SOIL_4);
var lyr_SOIL_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SOIL_4, 
                style: style_SOIL_4,
                popuplayertitle: 'SOIL',
                interactive: false,
    title: 'SOIL<br />\
    <img src="styles/legend/SOIL_4_0.png" /> Red Soil<br />' });
var lyr_DIGITALELEVATIONMAP_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'DIGITAL ELEVATION MAP<br />\
    <img src="styles/legend/DIGITALELEVATIONMAP_5_0.png" /> 1<br />\
    <img src="styles/legend/DIGITALELEVATIONMAP_5_1.png" /> 90<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DIGITALELEVATIONMAP_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8580861.954278, 931997.409695, 8586860.837949, 936904.372868]
        })
    });
var lyr_HILLSHADE_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'HILLSHADE<br />\
    <img src="styles/legend/HILLSHADE_6_0.png" /> 1<br />\
    <img src="styles/legend/HILLSHADE_6_1.png" /> 181<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/HILLSHADE_6.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8580861.954278, 931997.409695, 8586860.837949, 936904.372868]
        })
    });
var format_GEOLOGY_7 = new ol.format.GeoJSON();
var features_GEOLOGY_7 = format_GEOLOGY_7.readFeatures(json_GEOLOGY_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GEOLOGY_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEOLOGY_7.addFeatures(features_GEOLOGY_7);
var lyr_GEOLOGY_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GEOLOGY_7, 
                style: style_GEOLOGY_7,
                popuplayertitle: 'GEOLOGY',
                interactive: false,
    title: 'GEOLOGY<br />\
    <img src="styles/legend/GEOLOGY_7_0.png" /> Charnockite group of rocks<br />\
    <img src="styles/legend/GEOLOGY_7_1.png" /> Khondalite Group of rocks<br />\
    <img src="styles/legend/GEOLOGY_7_2.png" /> Sand and Silt<br />\
    <img src="styles/legend/GEOLOGY_7_3.png" /> <br />' });
var format_chenkal_8 = new ol.format.GeoJSON();
var features_chenkal_8 = format_chenkal_8.readFeatures(json_chenkal_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_chenkal_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_chenkal_8.addFeatures(features_chenkal_8);
var lyr_chenkal_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_chenkal_8, 
                style: style_chenkal_8,
                popuplayertitle: 'chenkal',
                interactive: false,
                title: '<img src="styles/legend/chenkal_8.png" /> chenkal'
            });
var format_ROAD_9 = new ol.format.GeoJSON();
var features_ROAD_9 = format_ROAD_9.readFeatures(json_ROAD_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ROAD_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ROAD_9.addFeatures(features_ROAD_9);
var lyr_ROAD_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ROAD_9, 
                style: style_ROAD_9,
                popuplayertitle: 'ROAD',
                interactive: false,
                title: '<img src="styles/legend/ROAD_9.png" /> ROAD'
            });
var format_CONTOUR_10 = new ol.format.GeoJSON();
var features_CONTOUR_10 = format_CONTOUR_10.readFeatures(json_CONTOUR_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CONTOUR_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONTOUR_10.addFeatures(features_CONTOUR_10);
var lyr_CONTOUR_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CONTOUR_10, 
                style: style_CONTOUR_10,
                popuplayertitle: 'CONTOUR',
                interactive: false,
                title: '<img src="styles/legend/CONTOUR_10.png" /> CONTOUR'
            });
var format_DRAINAGE_11 = new ol.format.GeoJSON();
var features_DRAINAGE_11 = format_DRAINAGE_11.readFeatures(json_DRAINAGE_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DRAINAGE_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRAINAGE_11.addFeatures(features_DRAINAGE_11);
var lyr_DRAINAGE_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRAINAGE_11, 
                style: style_DRAINAGE_11,
                popuplayertitle: 'DRAINAGE',
                interactive: false,
                title: '<img src="styles/legend/DRAINAGE_11.png" /> DRAINAGE'
            });
var format_CHENKAL_12 = new ol.format.GeoJSON();
var features_CHENKAL_12 = format_CHENKAL_12.readFeatures(json_CHENKAL_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CHENKAL_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CHENKAL_12.addFeatures(features_CHENKAL_12);
var lyr_CHENKAL_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CHENKAL_12, 
                style: style_CHENKAL_12,
                popuplayertitle: 'CHENKAL',
                interactive: false,
    title: 'CHENKAL<br />\
    <img src="styles/legend/CHENKAL_12_0.png" /> ARAYOOR<br />\
    <img src="styles/legend/CHENKAL_12_1.png" /> ARAYOOR KIZHAKKU<br />\
    <img src="styles/legend/CHENKAL_12_2.png" /> CHENKAL<br />\
    <img src="styles/legend/CHENKAL_12_3.png" /> CHENKAL KIZHAKKU<br />\
    <img src="styles/legend/CHENKAL_12_4.png" /> KEEZHAMMAKAM<br />\
    <img src="styles/legend/CHENKAL_12_5.png" /> KEEZHKOLLA<br />\
    <img src="styles/legend/CHENKAL_12_6.png" /> KOCHOTTUKONAM<br />\
    <img src="styles/legend/CHENKAL_12_7.png" /> KODANKARA<br />\
    <img src="styles/legend/CHENKAL_12_8.png" /> KOTTAMAM<br />\
    <img src="styles/legend/CHENKAL_12_9.png" /> KUDUMBOTTUKONAM<br />\
    <img src="styles/legend/CHENKAL_12_10.png" /> KUNNANVILA<br />\
    <img src="styles/legend/CHENKAL_12_11.png" /> MARIAPURAM<br />\
    <img src="styles/legend/CHENKAL_12_12.png" /> MELAMMAKAM<br />\
    <img src="styles/legend/CHENKAL_12_13.png" /> NEERAZHIVETTIVILA<br />\
    <img src="styles/legend/CHENKAL_12_14.png" /> NOCHIYOOR<br />\
    <img src="styles/legend/CHENKAL_12_15.png" /> PONVILA<br />\
    <img src="styles/legend/CHENKAL_12_16.png" /> PORANNOOR<br />\
    <img src="styles/legend/CHENKAL_12_17.png" /> THOTTINKARA<br />\
    <img src="styles/legend/CHENKAL_12_18.png" /> UDHIYANKULANGARA<br />\
    <img src="styles/legend/CHENKAL_12_19.png" /> VATTAVILA<br />\
    <img src="styles/legend/CHENKAL_12_20.png" /> VLATHANKARA<br />\
    <img src="styles/legend/CHENKAL_12_21.png" /> VLATHANKARA KIZHAKKU<br />\
    <img src="styles/legend/CHENKAL_12_22.png" /> <br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_SLOPE_2.setVisible(true);lyr_GEOMOGPOLOGY_3.setVisible(true);lyr_SOIL_4.setVisible(true);lyr_DIGITALELEVATIONMAP_5.setVisible(true);lyr_HILLSHADE_6.setVisible(true);lyr_GEOLOGY_7.setVisible(true);lyr_chenkal_8.setVisible(true);lyr_ROAD_9.setVisible(true);lyr_CONTOUR_10.setVisible(true);lyr_DRAINAGE_11.setVisible(true);lyr_CHENKAL_12.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,lyr_SLOPE_2,lyr_GEOMOGPOLOGY_3,lyr_SOIL_4,lyr_DIGITALELEVATIONMAP_5,lyr_HILLSHADE_6,lyr_GEOLOGY_7,lyr_chenkal_8,lyr_ROAD_9,lyr_CONTOUR_10,lyr_DRAINAGE_11,lyr_CHENKAL_12];
lyr_GEOMOGPOLOGY_3.set('fieldAliases', {'NAME': 'NAME', 'TYPE1': 'TYPE1', 'TYPE2': 'TYPE2', });
lyr_SOIL_4.set('fieldAliases', {'id': 'id', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'SOIL': 'SOIL', });
lyr_GEOLOGY_7.set('fieldAliases', {'ROCK_GROUP': 'ROCK_GROUP', 'NAME': 'NAME', });
lyr_chenkal_8.set('fieldAliases', {'id': 'id', });
lyr_ROAD_9.set('fieldAliases', {'NAME': 'NAME', 'Length': 'Length', });
lyr_CONTOUR_10.set('fieldAliases', {'ID': 'ID', 'ELEV': 'ELEV', });
lyr_DRAINAGE_11.set('fieldAliases', {'ORDER1': 'ORDER1', });
lyr_CHENKAL_12.set('fieldAliases', {'gml_parent': 'gml_parent', 'gml_pare_1': 'gml_pare_1', 'gml_id': 'gml_id', 'geom': 'geom', 'District': 'District', 'LSGD': 'LSGD', 'Ward_Name': 'Ward_Name', 'Ward_No': 'Ward_No', 'Lsgd_Type': 'Lsgd_Type', 'Created_Da': 'Created_Da', 'Surveyor': 'Surveyor', 'Mob_No': 'Mob_No', 'Remarks': 'Remarks', '_distLsgd': '_distLsgd', 'OBJECTID': 'OBJECTID', '_result': '_result', '_ulid': '_ulid', '_distLsgd2': '_distLsgd2', });
lyr_GEOMOGPOLOGY_3.set('fieldImages', {'NAME': 'TextEdit', 'TYPE1': 'TextEdit', 'TYPE2': 'TextEdit', });
lyr_SOIL_4.set('fieldImages', {'id': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'SOIL': 'TextEdit', });
lyr_GEOLOGY_7.set('fieldImages', {'ROCK_GROUP': 'TextEdit', 'NAME': 'TextEdit', });
lyr_chenkal_8.set('fieldImages', {'id': '', });
lyr_ROAD_9.set('fieldImages', {'NAME': 'TextEdit', 'Length': 'TextEdit', });
lyr_CONTOUR_10.set('fieldImages', {'ID': 'Range', 'ELEV': 'TextEdit', });
lyr_DRAINAGE_11.set('fieldImages', {'ORDER1': 'Range', });
lyr_CHENKAL_12.set('fieldImages', {'gml_parent': 'TextEdit', 'gml_pare_1': 'TextEdit', 'gml_id': 'TextEdit', 'geom': 'TextEdit', 'District': 'TextEdit', 'LSGD': 'TextEdit', 'Ward_Name': 'TextEdit', 'Ward_No': 'TextEdit', 'Lsgd_Type': 'TextEdit', 'Created_Da': 'TextEdit', 'Surveyor': 'TextEdit', 'Mob_No': 'TextEdit', 'Remarks': 'TextEdit', '_distLsgd': 'TextEdit', 'OBJECTID': 'TextEdit', '_result': 'TextEdit', '_ulid': 'TextEdit', '_distLsgd2': 'TextEdit', });
lyr_GEOMOGPOLOGY_3.set('fieldLabels', {'NAME': 'no label', 'TYPE1': 'no label', 'TYPE2': 'no label', });
lyr_SOIL_4.set('fieldLabels', {'id': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'SOIL': 'no label', });
lyr_GEOLOGY_7.set('fieldLabels', {'ROCK_GROUP': 'no label', 'NAME': 'no label', });
lyr_chenkal_8.set('fieldLabels', {'id': 'no label', });
lyr_ROAD_9.set('fieldLabels', {'NAME': 'no label', 'Length': 'no label', });
lyr_CONTOUR_10.set('fieldLabels', {'ID': 'no label', 'ELEV': 'no label', });
lyr_DRAINAGE_11.set('fieldLabels', {'ORDER1': 'no label', });
lyr_CHENKAL_12.set('fieldLabels', {'gml_parent': 'no label', 'gml_pare_1': 'no label', 'gml_id': 'no label', 'geom': 'no label', 'District': 'no label', 'LSGD': 'no label', 'Ward_Name': 'no label', 'Ward_No': 'no label', 'Lsgd_Type': 'no label', 'Created_Da': 'no label', 'Surveyor': 'no label', 'Mob_No': 'no label', 'Remarks': 'no label', '_distLsgd': 'no label', 'OBJECTID': 'no label', '_result': 'no label', '_ulid': 'no label', '_distLsgd2': 'no label', });
lyr_CHENKAL_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});