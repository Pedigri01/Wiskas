var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Germany_city_1 = new ol.format.GeoJSON();
var features_Germany_city_1 = format_Germany_city_1.readFeatures(json_Germany_city_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Germany_city_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Germany_city_1.addFeatures(features_Germany_city_1);
var lyr_Germany_city_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Germany_city_1, 
                style: style_Germany_city_1,
                popuplayertitle: 'Germany_city',
                interactive: true,
    title: 'Germany_city<br />\
    <img src="styles/legend/Germany_city_1_0.png" /> 315345 - 365587<br />\
    <img src="styles/legend/Germany_city_1_1.png" /> 365587 - 634830<br />\
    <img src="styles/legend/Germany_city_1_2.png" /> 634830 - 1083498<br />\
    <img src="styles/legend/Germany_city_1_3.png" /> 1083498 - 1841179<br />\
    <img src="styles/legend/Germany_city_1_4.png" /> 1841179 - 3644826<br />' });
var format_WorldBankOfficialBoundariesAdmin0_2 = new ol.format.GeoJSON();
var features_WorldBankOfficialBoundariesAdmin0_2 = format_WorldBankOfficialBoundariesAdmin0_2.readFeatures(json_WorldBankOfficialBoundariesAdmin0_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WorldBankOfficialBoundariesAdmin0_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WorldBankOfficialBoundariesAdmin0_2.addFeatures(features_WorldBankOfficialBoundariesAdmin0_2);
var lyr_WorldBankOfficialBoundariesAdmin0_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WorldBankOfficialBoundariesAdmin0_2, 
                style: style_WorldBankOfficialBoundariesAdmin0_2,
                popuplayertitle: 'World Bank Official Boundaries - Admin 0',
                interactive: true,
                title: '<img src="styles/legend/WorldBankOfficialBoundariesAdmin0_2.png" /> World Bank Official Boundaries - Admin 0'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Germany_city_1.setVisible(true);lyr_WorldBankOfficialBoundariesAdmin0_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Germany_city_1,lyr_WorldBankOfficialBoundariesAdmin0_2];
lyr_Germany_city_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'X': 'X', 'Y': 'Y', 'Population': 'Population', 'Density': 'Density', 'Region': 'Region', });
lyr_WorldBankOfficialBoundariesAdmin0_2.set('fieldAliases', {'ISO_A3': 'ISO_A3', 'ISO_A2': 'ISO_A2', 'WB_A3': 'WB_A3', 'WB_STATUS': 'WB_STATUS', 'SOV_ISO_A3': 'SOV_ISO_A3', 'SOV_NAME': 'SOV_NAME', 'NAM_0': 'NAM_0', 'CONTINENT': 'CONTINENT', 'WB_REGION': 'WB_REGION', 'WB_INCOME': 'WB_INCOME', 'ADM0CD_c': 'ADM0CD_c', });
lyr_Germany_city_1.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Population': 'TextEdit', 'Density': 'TextEdit', 'Region': 'TextEdit', });
lyr_WorldBankOfficialBoundariesAdmin0_2.set('fieldImages', {'ISO_A3': 'TextEdit', 'ISO_A2': 'TextEdit', 'WB_A3': 'TextEdit', 'WB_STATUS': 'TextEdit', 'SOV_ISO_A3': 'TextEdit', 'SOV_NAME': 'TextEdit', 'NAM_0': 'TextEdit', 'CONTINENT': 'TextEdit', 'WB_REGION': 'TextEdit', 'WB_INCOME': 'TextEdit', 'ADM0CD_c': 'TextEdit', });
lyr_Germany_city_1.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'X': 'no label', 'Y': 'no label', 'Population': 'no label', 'Density': 'no label', 'Region': 'no label', });
lyr_WorldBankOfficialBoundariesAdmin0_2.set('fieldLabels', {'ISO_A3': 'no label', 'ISO_A2': 'no label', 'WB_A3': 'no label', 'WB_STATUS': 'no label', 'SOV_ISO_A3': 'no label', 'SOV_NAME': 'no label', 'NAM_0': 'no label', 'CONTINENT': 'no label', 'WB_REGION': 'no label', 'WB_INCOME': 'no label', 'ADM0CD_c': 'no label', });
lyr_WorldBankOfficialBoundariesAdmin0_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});