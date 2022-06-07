var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_WQIndicator_Chlorophyll_1 = new ol.format.GeoJSON();
var features_WQIndicator_Chlorophyll_1 = format_WQIndicator_Chlorophyll_1.readFeatures(json_WQIndicator_Chlorophyll_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WQIndicator_Chlorophyll_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WQIndicator_Chlorophyll_1.addFeatures(features_WQIndicator_Chlorophyll_1);
var lyr_WQIndicator_Chlorophyll_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WQIndicator_Chlorophyll_1, 
                style: style_WQIndicator_Chlorophyll_1,
                interactive: true,
    title: 'WQ-Indicator_Chlorophyll<br />\
    <img src="styles/legend/WQIndicator_Chlorophyll_1_0.png" /> Eutrophic<br />\
    <img src="styles/legend/WQIndicator_Chlorophyll_1_1.png" /> Hypertrophic<br />\
    <img src="styles/legend/WQIndicator_Chlorophyll_1_2.png" /> Mesotrophic<br />\
    <img src="styles/legend/WQIndicator_Chlorophyll_1_3.png" /> Oligotrophic<br />'
        });
var format_WQIndicator_Seechi_2 = new ol.format.GeoJSON();
var features_WQIndicator_Seechi_2 = format_WQIndicator_Seechi_2.readFeatures(json_WQIndicator_Seechi_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WQIndicator_Seechi_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WQIndicator_Seechi_2.addFeatures(features_WQIndicator_Seechi_2);
var lyr_WQIndicator_Seechi_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WQIndicator_Seechi_2, 
                style: style_WQIndicator_Seechi_2,
                interactive: true,
    title: 'WQ-Indicator_Seechi <br />\
    <img src="styles/legend/WQIndicator_Seechi_2_0.png" /> Eutrophic<br />\
    <img src="styles/legend/WQIndicator_Seechi_2_1.png" /> Hypertrophic<br />\
    <img src="styles/legend/WQIndicator_Seechi_2_2.png" /> Mesotrophic<br />'
        });
var format_WQIndicator_TP_3 = new ol.format.GeoJSON();
var features_WQIndicator_TP_3 = format_WQIndicator_TP_3.readFeatures(json_WQIndicator_TP_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WQIndicator_TP_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WQIndicator_TP_3.addFeatures(features_WQIndicator_TP_3);
var lyr_WQIndicator_TP_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WQIndicator_TP_3, 
                style: style_WQIndicator_TP_3,
                interactive: true,
    title: 'WQ-Indicator_TP<br />\
    <img src="styles/legend/WQIndicator_TP_3_0.png" /> Eutrophic<br />\
    <img src="styles/legend/WQIndicator_TP_3_1.png" /> Hypertrophic<br />\
    <img src="styles/legend/WQIndicator_TP_3_2.png" /> Mesotrophic<br />'
        });
var format_WQIndicator_TN_4 = new ol.format.GeoJSON();
var features_WQIndicator_TN_4 = format_WQIndicator_TN_4.readFeatures(json_WQIndicator_TN_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WQIndicator_TN_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WQIndicator_TN_4.addFeatures(features_WQIndicator_TN_4);
var lyr_WQIndicator_TN_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WQIndicator_TN_4, 
                style: style_WQIndicator_TN_4,
                interactive: true,
    title: 'WQ-Indicator_TN<br />\
    <img src="styles/legend/WQIndicator_TN_4_0.png" /> Mesotrophic<br />\
    <img src="styles/legend/WQIndicator_TN_4_1.png" /> Oligotrophic<br />'
        });

lyr_GoogleTerrain_0.setVisible(true);lyr_WQIndicator_Chlorophyll_1.setVisible(true);lyr_WQIndicator_Seechi_2.setVisible(true);lyr_WQIndicator_TP_3.setVisible(true);lyr_WQIndicator_TN_4.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_WQIndicator_Chlorophyll_1,lyr_WQIndicator_Seechi_2,lyr_WQIndicator_TP_3,lyr_WQIndicator_TN_4];
lyr_WQIndicator_Chlorophyll_1.set('fieldAliases', {'year': 'year', 'locality': 'locality', 'decimalLatitude': 'decimalLatitude', 'decimalLongitude': 'decimalLongitude', 'Group': 'Group', 'Parameters': 'Parameters', 'mean.Values.': 'mean.Values.', 'Trophic Category': 'Trophic Category', });
lyr_WQIndicator_Seechi_2.set('fieldAliases', {'year': 'year', 'locality': 'locality', 'decimalLatitude': 'decimalLatitude', 'decimalLongitude': 'decimalLongitude', 'Group': 'Group', 'Parameters': 'Parameters', 'mean.Values.': 'mean.Values.', 'Trophic Category': 'Trophic Category', });
lyr_WQIndicator_TP_3.set('fieldAliases', {'year': 'year', 'locality': 'locality', 'decimalLatitude': 'decimalLatitude', 'decimalLongitude': 'decimalLongitude', 'Group': 'Group', 'Parameters': 'Parameters', 'mean.Values.': 'mean.Values.', 'Trophic Category': 'Trophic Category', });
lyr_WQIndicator_TN_4.set('fieldAliases', {'year': 'year', 'locality': 'locality', 'decimalLatitude': 'decimalLatitude', 'decimalLongitude': 'decimalLongitude', 'Group': 'Group', 'Parameters': 'Parameters', 'mean.Values.': 'mean.Values.', 'Trophic Category': 'Trophic Category', });
lyr_WQIndicator_Chlorophyll_1.set('fieldImages', {'year': 'TextEdit', 'locality': 'TextEdit', 'decimalLatitude': 'TextEdit', 'decimalLongitude': 'TextEdit', 'Group': 'TextEdit', 'Parameters': 'TextEdit', 'mean.Values.': 'TextEdit', 'Trophic Category': 'TextEdit', });
lyr_WQIndicator_Seechi_2.set('fieldImages', {'year': 'TextEdit', 'locality': 'TextEdit', 'decimalLatitude': 'TextEdit', 'decimalLongitude': 'TextEdit', 'Group': 'TextEdit', 'Parameters': 'TextEdit', 'mean.Values.': 'TextEdit', 'Trophic Category': 'TextEdit', });
lyr_WQIndicator_TP_3.set('fieldImages', {'year': 'TextEdit', 'locality': 'TextEdit', 'decimalLatitude': 'TextEdit', 'decimalLongitude': 'TextEdit', 'Group': 'TextEdit', 'Parameters': 'TextEdit', 'mean.Values.': 'TextEdit', 'Trophic Category': 'TextEdit', });
lyr_WQIndicator_TN_4.set('fieldImages', {'year': 'TextEdit', 'locality': 'TextEdit', 'decimalLatitude': 'TextEdit', 'decimalLongitude': 'TextEdit', 'Group': 'TextEdit', 'Parameters': 'TextEdit', 'mean.Values.': 'TextEdit', 'Trophic Category': 'TextEdit', });
lyr_WQIndicator_Chlorophyll_1.set('fieldLabels', {'year': 'no label', 'locality': 'no label', 'decimalLatitude': 'no label', 'decimalLongitude': 'no label', 'Group': 'no label', 'Parameters': 'no label', 'mean.Values.': 'no label', 'Trophic Category': 'no label', });
lyr_WQIndicator_Seechi_2.set('fieldLabels', {'year': 'no label', 'locality': 'no label', 'decimalLatitude': 'no label', 'decimalLongitude': 'no label', 'Group': 'no label', 'Parameters': 'no label', 'mean.Values.': 'no label', 'Trophic Category': 'no label', });
lyr_WQIndicator_TP_3.set('fieldLabels', {'year': 'no label', 'locality': 'no label', 'decimalLatitude': 'no label', 'decimalLongitude': 'no label', 'Group': 'no label', 'Parameters': 'no label', 'mean.Values.': 'no label', 'Trophic Category': 'no label', });
lyr_WQIndicator_TN_4.set('fieldLabels', {'year': 'no label', 'locality': 'no label', 'decimalLatitude': 'no label', 'decimalLongitude': 'no label', 'Group': 'no label', 'Parameters': 'no label', 'mean.Values.': 'no label', 'Trophic Category': 'no label', });
lyr_WQIndicator_TN_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});