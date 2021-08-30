ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32613").setExtent([290106.997534, 3002453.799195, 290339.079097, 3002647.390292]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_NDVI_30cm07192021_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "NDVI_30cm-07-19-2021",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDVI_30cm07192021_1.png",
    attributions: ' ',
                                projection: 'EPSG:32613',
                                alwaysInRange: true,
                                imageExtent: [290140.809000, 3002469.811900, 290295.282200, 3002631.906100]
                            })
                        });
var format_TreeCrownZonalSt_2 = new ol.format.GeoJSON();
var features_TreeCrownZonalSt_2 = format_TreeCrownZonalSt_2.readFeatures(json_TreeCrownZonalSt_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32613'});
var jsonSource_TreeCrownZonalSt_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TreeCrownZonalSt_2.addFeatures(features_TreeCrownZonalSt_2);
var lyr_TreeCrownZonalSt_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TreeCrownZonalSt_2, 
                style: style_TreeCrownZonalSt_2,
                interactive: false,
                title: '<img src="styles/legend/TreeCrownZonalSt_2.png" /> TreeCrownZonalSt'
            });
var format_treetops07192021_3 = new ol.format.GeoJSON();
var features_treetops07192021_3 = format_treetops07192021_3.readFeatures(json_treetops07192021_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32613'});
var jsonSource_treetops07192021_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_treetops07192021_3.addFeatures(features_treetops07192021_3);
var lyr_treetops07192021_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_treetops07192021_3, 
                style: style_treetops07192021_3,
                interactive: false,
                title: '<img src="styles/legend/treetops07192021_3.png" /> treetops-07-19-2021'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_NDVI_30cm07192021_1.setVisible(true);lyr_TreeCrownZonalSt_2.setVisible(true);lyr_treetops07192021_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_NDVI_30cm07192021_1,lyr_TreeCrownZonalSt_2,lyr_treetops07192021_3];
lyr_TreeCrownZonalSt_2.set('fieldAliases', {'x': 'x', 'y': 'y', 'Height': 'Height', 'CA': 'CA', 'CR': 'CR', 'treeID': 'treeID', 'ndvimean': 'ndvimean', 'ndvimedian': 'ndvimedian', 'ndvistdev': 'ndvistdev', 'ndvimin': 'ndvimin', 'ndvimax': 'ndvimax', 'ndvirange': 'ndvirange', 'ndviminori': 'ndviminori', 'ndvimajori': 'ndvimajori', 'ndvivariet': 'ndvivariet', 'ndvivarian': 'ndvivarian', });
lyr_treetops07192021_3.set('fieldAliases', {'x': 'x', 'y': 'y', 'Height': 'Height', 'CA': 'CA', 'CR': 'CR', 'treeID': 'treeID', });
lyr_TreeCrownZonalSt_2.set('fieldImages', {'x': '', 'y': '', 'Height': '', 'CA': '', 'CR': '', 'treeID': '', 'ndvimean': '', 'ndvimedian': '', 'ndvistdev': '', 'ndvimin': '', 'ndvimax': '', 'ndvirange': '', 'ndviminori': '', 'ndvimajori': '', 'ndvivariet': '', 'ndvivarian': '', });
lyr_treetops07192021_3.set('fieldImages', {'x': '', 'y': '', 'Height': '', 'CA': '', 'CR': '', 'treeID': '', });
lyr_TreeCrownZonalSt_2.set('fieldLabels', {'x': 'inline label', 'y': 'inline label', 'Height': 'inline label', 'CA': 'inline label', 'CR': 'inline label', 'treeID': 'inline label', 'ndvimean': 'inline label', 'ndvimedian': 'inline label', 'ndvistdev': 'inline label', 'ndvimin': 'inline label', 'ndvimax': 'inline label', 'ndvirange': 'inline label', 'ndviminori': 'inline label', 'ndvimajori': 'inline label', 'ndvivariet': 'inline label', 'ndvivarian': 'inline label', });
lyr_treetops07192021_3.set('fieldLabels', {'x': 'inline label', 'y': 'inline label', 'Height': 'inline label', 'CA': 'inline label', 'CR': 'inline label', 'treeID': 'inline label', });
lyr_treetops07192021_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});