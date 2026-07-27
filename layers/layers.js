var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_KONTURKETINGGIANmdpl_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'KONTUR KETINGGIAN (mdpl)<br />\
    <img src="styles/legend/KONTURKETINGGIANmdpl_1_0.png" /> <= 700<br />\
    <img src="styles/legend/KONTURKETINGGIANmdpl_1_1.png" /> 700 - 750<br />\
    <img src="styles/legend/KONTURKETINGGIANmdpl_1_2.png" /> 750 - 800<br />\
    <img src="styles/legend/KONTURKETINGGIANmdpl_1_3.png" /> 800 - 850<br />\
    <img src="styles/legend/KONTURKETINGGIANmdpl_1_4.png" /> 850 - 900<br />\
    <img src="styles/legend/KONTURKETINGGIANmdpl_1_5.png" /> 900 - 950<br />\
    <img src="styles/legend/KONTURKETINGGIANmdpl_1_6.png" /> 950 - 1000<br />\
    <img src="styles/legend/KONTURKETINGGIANmdpl_1_7.png" /> 1000 - 1050<br />\
    <img src="styles/legend/KONTURKETINGGIANmdpl_1_8.png" /> 1050 - 1100<br />\
    <img src="styles/legend/KONTURKETINGGIANmdpl_1_9.png" /> 1100 - 1150<br />\
    <img src="styles/legend/KONTURKETINGGIANmdpl_1_10.png" /> 1150 - 1200<br />\
    <img src="styles/legend/KONTURKETINGGIANmdpl_1_11.png" /> 1200 - 1250<br />\
    <img src="styles/legend/KONTURKETINGGIANmdpl_1_12.png" /> 1250 - 1300<br />\
    <img src="styles/legend/KONTURKETINGGIANmdpl_1_13.png" /> 1300 - 1350<br />\
    <img src="styles/legend/KONTURKETINGGIANmdpl_1_14.png" /> 1350 - 1400<br />\
    <img src="styles/legend/KONTURKETINGGIANmdpl_1_15.png" /> 1400 - 1450<br />\
    <img src="styles/legend/KONTURKETINGGIANmdpl_1_16.png" /> 1450 - 1500<br />\
    <img src="styles/legend/KONTURKETINGGIANmdpl_1_17.png" /> 1500 - 1550<br />\
    <img src="styles/legend/KONTURKETINGGIANmdpl_1_18.png" /> 1550 - 1600<br />\
    <img src="styles/legend/KONTURKETINGGIANmdpl_1_19.png" /> 1600 - 1650<br />\
    <img src="styles/legend/KONTURKETINGGIANmdpl_1_20.png" /> 1650 - 1700<br />\
    <img src="styles/legend/KONTURKETINGGIANmdpl_1_21.png" /> 1700 - 1750<br />\
    <img src="styles/legend/KONTURKETINGGIANmdpl_1_22.png" /> 1750 - 1800<br />\
    <img src="styles/legend/KONTURKETINGGIANmdpl_1_23.png" /> 1800 - 1850<br />\
    <img src="styles/legend/KONTURKETINGGIANmdpl_1_24.png" /> 1850 - 1900<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/KONTURKETINGGIANmdpl_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12227195.761860, -796963.781644, 12230039.589795, -791652.689212]
        })
    });
var format_SUNGAI_2 = new ol.format.GeoJSON();
var features_SUNGAI_2 = format_SUNGAI_2.readFeatures(json_SUNGAI_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_2.addFeatures(features_SUNGAI_2);
var lyr_SUNGAI_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNGAI_2, 
                style: style_SUNGAI_2,
                popuplayertitle: 'SUNGAI',
                interactive: false,
                title: '<img src="styles/legend/SUNGAI_2.png" /> SUNGAI'
            });
var format_JALAN_3 = new ol.format.GeoJSON();
var features_JALAN_3 = format_JALAN_3.readFeatures(json_JALAN_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_3.addFeatures(features_JALAN_3);
var lyr_JALAN_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALAN_3, 
                style: style_JALAN_3,
                popuplayertitle: 'JALAN',
                interactive: false,
                title: '<img src="styles/legend/JALAN_3.png" /> JALAN'
            });
var format_KONTURKETINGGIANmdpl_4 = new ol.format.GeoJSON();
var features_KONTURKETINGGIANmdpl_4 = format_KONTURKETINGGIANmdpl_4.readFeatures(json_KONTURKETINGGIANmdpl_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KONTURKETINGGIANmdpl_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KONTURKETINGGIANmdpl_4.addFeatures(features_KONTURKETINGGIANmdpl_4);
var lyr_KONTURKETINGGIANmdpl_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KONTURKETINGGIANmdpl_4, 
                style: style_KONTURKETINGGIANmdpl_4,
                popuplayertitle: 'KONTUR KETINGGIAN (mdpl)',
                interactive: true,
                title: 'KONTUR KETINGGIAN (mdpl)'
            });
var format_BATASDESAKETELENG_5 = new ol.format.GeoJSON();
var features_BATASDESAKETELENG_5 = format_BATASDESAKETELENG_5.readFeatures(json_BATASDESAKETELENG_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATASDESAKETELENG_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATASDESAKETELENG_5.addFeatures(features_BATASDESAKETELENG_5);
var lyr_BATASDESAKETELENG_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BATASDESAKETELENG_5, 
                style: style_BATASDESAKETELENG_5,
                popuplayertitle: 'BATAS DESA KETELENG',
                interactive: false,
                title: '<img src="styles/legend/BATASDESAKETELENG_5.png" /> BATAS DESA KETELENG'
            });
var format_RTRW_6 = new ol.format.GeoJSON();
var features_RTRW_6 = format_RTRW_6.readFeatures(json_RTRW_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RTRW_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RTRW_6.addFeatures(features_RTRW_6);
var lyr_RTRW_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RTRW_6, 
                style: style_RTRW_6,
                popuplayertitle: 'RT/RW',
                interactive: true,
                title: '<img src="styles/legend/RTRW_6.png" /> RT/RW'
            });
var format_PADUKUHAN_7 = new ol.format.GeoJSON();
var features_PADUKUHAN_7 = format_PADUKUHAN_7.readFeatures(json_PADUKUHAN_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PADUKUHAN_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PADUKUHAN_7.addFeatures(features_PADUKUHAN_7);
var lyr_PADUKUHAN_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PADUKUHAN_7, 
                style: style_PADUKUHAN_7,
                popuplayertitle: 'PADUKUHAN',
                interactive: true,
                title: '<img src="styles/legend/PADUKUHAN_7.png" /> PADUKUHAN'
            });
var format_SARANAIBADAH_8 = new ol.format.GeoJSON();
var features_SARANAIBADAH_8 = format_SARANAIBADAH_8.readFeatures(json_SARANAIBADAH_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SARANAIBADAH_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SARANAIBADAH_8.addFeatures(features_SARANAIBADAH_8);
var lyr_SARANAIBADAH_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SARANAIBADAH_8, 
                style: style_SARANAIBADAH_8,
                popuplayertitle: 'SARANAIBADAH',
                interactive: true,
                title: '<img src="styles/legend/SARANAIBADAH_8.png" /> SARANAIBADAH'
            });
var format_PEMERINTAHAN_9 = new ol.format.GeoJSON();
var features_PEMERINTAHAN_9 = format_PEMERINTAHAN_9.readFeatures(json_PEMERINTAHAN_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEMERINTAHAN_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMERINTAHAN_9.addFeatures(features_PEMERINTAHAN_9);
var lyr_PEMERINTAHAN_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PEMERINTAHAN_9, 
                style: style_PEMERINTAHAN_9,
                popuplayertitle: 'PEMERINTAHAN',
                interactive: true,
                title: '<img src="styles/legend/PEMERINTAHAN_9.png" /> PEMERINTAHAN'
            });
var format_PENDIDIKAN_10 = new ol.format.GeoJSON();
var features_PENDIDIKAN_10 = format_PENDIDIKAN_10.readFeatures(json_PENDIDIKAN_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PENDIDIKAN_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PENDIDIKAN_10.addFeatures(features_PENDIDIKAN_10);
var lyr_PENDIDIKAN_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PENDIDIKAN_10, 
                style: style_PENDIDIKAN_10,
                popuplayertitle: 'PENDIDIKAN',
                interactive: true,
                title: '<img src="styles/legend/PENDIDIKAN_10.png" /> PENDIDIKAN'
            });
var format_KESEHATAN_11 = new ol.format.GeoJSON();
var features_KESEHATAN_11 = format_KESEHATAN_11.readFeatures(json_KESEHATAN_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KESEHATAN_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KESEHATAN_11.addFeatures(features_KESEHATAN_11);
var lyr_KESEHATAN_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KESEHATAN_11, 
                style: style_KESEHATAN_11,
                popuplayertitle: 'KESEHATAN',
                interactive: true,
                title: '<img src="styles/legend/KESEHATAN_11.png" /> KESEHATAN'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_KONTURKETINGGIANmdpl_1.setVisible(false);lyr_SUNGAI_2.setVisible(false);lyr_JALAN_3.setVisible(false);lyr_KONTURKETINGGIANmdpl_4.setVisible(false);lyr_BATASDESAKETELENG_5.setVisible(true);lyr_RTRW_6.setVisible(true);lyr_PADUKUHAN_7.setVisible(true);lyr_SARANAIBADAH_8.setVisible(true);lyr_PEMERINTAHAN_9.setVisible(true);lyr_PENDIDIKAN_10.setVisible(true);lyr_KESEHATAN_11.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_KONTURKETINGGIANmdpl_1,lyr_SUNGAI_2,lyr_JALAN_3,lyr_KONTURKETINGGIANmdpl_4,lyr_BATASDESAKETELENG_5,lyr_RTRW_6,lyr_PADUKUHAN_7,lyr_SARANAIBADAH_8,lyr_PEMERINTAHAN_9,lyr_PENDIDIKAN_10,lyr_KESEHATAN_11];
lyr_SUNGAI_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JALAN_3.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_KONTURKETINGGIANmdpl_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'VALKNT': 'VALKNT', 'TIPKNT': 'TIPKNT', 'IDXKNT': 'IDXKNT', 'FCODE': 'FCODE', 'JNSKNT': 'JNSKNT', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_BATASDESAKETELENG_5.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_RTRW_6.set('fieldAliases', {'id': 'id', 'RT': 'RT', 'RW': 'RW', });
lyr_PADUKUHAN_7.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_SARANAIBADAH_8.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'FGSIBD': 'FGSIBD', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_PEMERINTAHAN_9.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FGSGOV': 'FGSGOV', 'LUAS': 'LUAS', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_PENDIDIKAN_10.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'KATPDK': 'KATPDK', 'JLPDDK': 'JLPDDK', 'FGGPDK': 'FGGPDK', 'REMARK': 'REMARK', 'FCODE': 'FCODE', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JJGPDF': 'JJGPDF', 'JNSPDL': 'JNSPDL', });
lyr_KESEHATAN_11.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'REMARK': 'REMARK', 'TIPSHT': 'TIPSHT', 'FCODE': 'FCODE', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'FSKADD': 'FSKADD', });
lyr_SUNGAI_2.set('fieldImages', {'NAMOBJ': 'TextEdit', 'TIPSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_JALAN_3.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_KONTURKETINGGIANmdpl_4.set('fieldImages', {'NAMOBJ': 'TextEdit', 'VALKNT': 'TextEdit', 'TIPKNT': 'TextEdit', 'IDXKNT': 'TextEdit', 'FCODE': 'TextEdit', 'JNSKNT': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_BATASDESAKETELENG_5.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_RTRW_6.set('fieldImages', {'id': 'TextEdit', 'RT': 'TextEdit', 'RW': 'TextEdit', });
lyr_PADUKUHAN_7.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_SARANAIBADAH_8.set('fieldImages', {'NAMOBJ': 'TextEdit', 'LUAS': 'TextEdit', 'FGSIBD': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_PEMERINTAHAN_9.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FGSGOV': 'TextEdit', 'LUAS': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_PENDIDIKAN_10.set('fieldImages', {'NAMOBJ': 'TextEdit', 'LUAS': 'TextEdit', 'KATPDK': 'TextEdit', 'JLPDDK': 'TextEdit', 'FGGPDK': 'TextEdit', 'REMARK': 'TextEdit', 'FCODE': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'JJGPDF': 'TextEdit', 'JNSPDL': 'TextEdit', });
lyr_KESEHATAN_11.set('fieldImages', {'NAMOBJ': 'TextEdit', 'LUAS': 'TextEdit', 'REMARK': 'TextEdit', 'TIPSHT': 'TextEdit', 'FCODE': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'FSKADD': 'TextEdit', });
lyr_SUNGAI_2.set('fieldLabels', {'NAMOBJ': 'hidden field', 'TIPSNG': 'hidden field', 'KLSSNG': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'SRS_ID': 'hidden field', 'LCODE': 'hidden field', 'METADATA': 'hidden field', 'NAMWS': 'hidden field', 'NAMDAS': 'hidden field', 'STATUS': 'hidden field', 'WMAX': 'hidden field', 'DBTMAX': 'hidden field', 'SLPRT': 'hidden field', 'SHAPE_Leng': 'hidden field', });
lyr_JALAN_3.set('fieldLabels', {'NAMRJL': 'hidden field', 'KONRJL': 'hidden field', 'MATRJL': 'hidden field', 'FGSRJL': 'hidden field', 'UTKRJL': 'hidden field', 'TOLRJL': 'hidden field', 'WLYRJL': 'hidden field', 'AUTRJL': 'hidden field', 'KLSRJL': 'hidden field', 'SPCRJL': 'hidden field', 'JPARJL': 'hidden field', 'ARHRJL': 'hidden field', 'STARJL': 'hidden field', 'KLLRJL': 'hidden field', 'MEDRJL': 'hidden field', 'LOCRJL': 'hidden field', 'JARRJL': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'SRS_ID': 'hidden field', 'LCODE': 'hidden field', 'METADATA': 'hidden field', 'SHAPE_Leng': 'hidden field', });
lyr_KONTURKETINGGIANmdpl_4.set('fieldLabels', {'NAMOBJ': 'hidden field', 'VALKNT': 'no label', 'TIPKNT': 'hidden field', 'IDXKNT': 'hidden field', 'FCODE': 'hidden field', 'JNSKNT': 'hidden field', 'REMARK': 'hidden field', 'SRS_ID': 'hidden field', 'LCODE': 'hidden field', 'METADATA': 'hidden field', 'SHAPE_Leng': 'hidden field', });
lyr_BATASDESAKETELENG_5.set('fieldLabels', {'KDPPUM': 'hidden field', 'NAMOBJ': 'hidden field', 'REMARK': 'hidden field', 'KDPBPS': 'hidden field', 'FCODE': 'hidden field', 'LUASWH': 'hidden field', 'UUPP': 'hidden field', 'SRS_ID': 'hidden field', 'LCODE': 'hidden field', 'METADATA': 'hidden field', 'KDEBPS': 'hidden field', 'KDEPUM': 'hidden field', 'KDCBPS': 'hidden field', 'KDCPUM': 'hidden field', 'KDBBPS': 'hidden field', 'KDBPUM': 'hidden field', 'WADMKD': 'hidden field', 'WIADKD': 'hidden field', 'WADMKC': 'hidden field', 'WIADKC': 'hidden field', 'WADMKK': 'hidden field', 'WIADKK': 'hidden field', 'WADMPR': 'hidden field', 'WIADPR': 'hidden field', 'TIPADM': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_RTRW_6.set('fieldLabels', {'id': 'hidden field', 'RT': 'no label', 'RW': 'no label', });
lyr_PADUKUHAN_7.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'SRS_ID': 'hidden field', 'LCODE': 'hidden field', 'METADATA': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_SARANAIBADAH_8.set('fieldLabels', {'NAMOBJ': 'hidden field', 'LUAS': 'hidden field', 'FGSIBD': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'no label', 'SRS_ID': 'hidden field', 'LCODE': 'hidden field', 'METADATA': 'hidden field', });
lyr_PEMERINTAHAN_9.set('fieldLabels', {'NAMOBJ': 'hidden field', 'FGSGOV': 'hidden field', 'LUAS': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'no label', 'SRS_ID': 'hidden field', 'LCODE': 'hidden field', 'METADATA': 'hidden field', });
lyr_PENDIDIKAN_10.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'hidden field', 'KATPDK': 'hidden field', 'JLPDDK': 'hidden field', 'FGGPDK': 'hidden field', 'REMARK': 'hidden field', 'FCODE': 'hidden field', 'SRS_ID': 'hidden field', 'LCODE': 'hidden field', 'METADATA': 'hidden field', 'JJGPDF': 'hidden field', 'JNSPDL': 'hidden field', });
lyr_KESEHATAN_11.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'hidden field', 'REMARK': 'hidden field', 'TIPSHT': 'hidden field', 'FCODE': 'hidden field', 'SRS_ID': 'hidden field', 'LCODE': 'hidden field', 'METADATA': 'hidden field', 'FSKADD': 'hidden field', });
lyr_KESEHATAN_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});