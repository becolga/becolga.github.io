var wms_layers = [];

var format_Parcels2_0 = new ol.format.GeoJSON();
var features_Parcels2_0 = format_Parcels2_0.readFeatures(json_Parcels2_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parcels2_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcels2_0.addFeatures(features_Parcels2_0);
var lyr_Parcels2_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Parcels2_0, 
                style: style_Parcels2_0,
                interactive: true,
                title: '<img src="styles/legend/Parcels2_0.png" /> Parcels2'
            });

lyr_Parcels2_0.setVisible(true);
var layersList = [lyr_Parcels2_0];
lyr_Parcels2_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'OBJECT_ID': 'OBJECT_ID', 'GUT_NUMBER': 'GUT_NUMBER', 'ARN': 'ARN', 'Label': 'Label', 'Pri_Roll': 'Pri_Roll', 'Shape_Leng': 'Shape_Leng', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Parcels2_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'OBJECT_ID': 'TextEdit', 'GUT_NUMBER': 'Range', 'ARN': 'TextEdit', 'Label': 'TextEdit', 'Pri_Roll': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Parcels2_0.set('fieldLabels', {'OBJECTID': 'no label', 'OBJECT_ID': 'no label', 'GUT_NUMBER': 'no label', 'ARN': 'header label', 'Label': 'no label', 'Pri_Roll': 'no label', 'Shape_Leng': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Parcels2_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});