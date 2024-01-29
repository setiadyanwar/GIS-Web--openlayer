var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ADMINISTRASIDESA_AR_25K_1 = new ol.format.GeoJSON();
var features_ADMINISTRASIDESA_AR_25K_1 = format_ADMINISTRASIDESA_AR_25K_1.readFeatures(json_ADMINISTRASIDESA_AR_25K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIDESA_AR_25K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIDESA_AR_25K_1.addFeatures(features_ADMINISTRASIDESA_AR_25K_1);
var lyr_ADMINISTRASIDESA_AR_25K_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ADMINISTRASIDESA_AR_25K_1, 
                style: style_ADMINISTRASIDESA_AR_25K_1,
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIDESA_AR_25K_1.png" /> ADMINISTRASIDESA_AR_25K'
            });
var format_SetiadyIbrahimAnwar_J0403221123_2 = new ol.format.GeoJSON();
var features_SetiadyIbrahimAnwar_J0403221123_2 = format_SetiadyIbrahimAnwar_J0403221123_2.readFeatures(json_SetiadyIbrahimAnwar_J0403221123_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SetiadyIbrahimAnwar_J0403221123_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SetiadyIbrahimAnwar_J0403221123_2.addFeatures(features_SetiadyIbrahimAnwar_J0403221123_2);
var lyr_SetiadyIbrahimAnwar_J0403221123_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SetiadyIbrahimAnwar_J0403221123_2, 
                style: style_SetiadyIbrahimAnwar_J0403221123_2,
                interactive: true,
                title: '<img src="styles/legend/SetiadyIbrahimAnwar_J0403221123_2.png" /> Setiady Ibrahim Anwar_J0403221123'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ADMINISTRASIDESA_AR_25K_1.setVisible(true);lyr_SetiadyIbrahimAnwar_J0403221123_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ADMINISTRASIDESA_AR_25K_1,lyr_SetiadyIbrahimAnwar_J0403221123_2];
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_SetiadyIbrahimAnwar_J0403221123_2.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'kos': 'kos', 'harga': 'harga', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_SetiadyIbrahimAnwar_J0403221123_2.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'kos': 'TextEdit', 'harga': 'TextEdit', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_SetiadyIbrahimAnwar_J0403221123_2.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'kos': 'no label', 'harga': 'no label', });
lyr_SetiadyIbrahimAnwar_J0403221123_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});