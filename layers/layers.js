var wms_layers = [];


        var lyr_ESRISatelliteArcGISWorld_Imagery_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite (ArcGIS/World_Imagery)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_CityLimitsCountyBoundary_1 = new ol.format.GeoJSON();
var features_CityLimitsCountyBoundary_1 = format_CityLimitsCountyBoundary_1.readFeatures(json_CityLimitsCountyBoundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CityLimitsCountyBoundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CityLimitsCountyBoundary_1.addFeatures(features_CityLimitsCountyBoundary_1);
var lyr_CityLimitsCountyBoundary_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CityLimitsCountyBoundary_1, 
                style: style_CityLimitsCountyBoundary_1,
                popuplayertitle: 'CityLimits — CountyBoundary',
                interactive: true,
                title: 'CityLimits — CountyBoundary'
            });
var format_Isochrones_2 = new ol.format.GeoJSON();
var features_Isochrones_2 = format_Isochrones_2.readFeatures(json_Isochrones_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Isochrones_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Isochrones_2.addFeatures(features_Isochrones_2);
var lyr_Isochrones_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Isochrones_2, 
                style: style_Isochrones_2,
                popuplayertitle: 'Isochrones',
                interactive: false,
                title: '<img src="styles/legend/Isochrones_2.png" /> Isochrones'
            });
var format_ParkandRecreationFacilities_3 = new ol.format.GeoJSON();
var features_ParkandRecreationFacilities_3 = format_ParkandRecreationFacilities_3.readFeatures(json_ParkandRecreationFacilities_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParkandRecreationFacilities_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParkandRecreationFacilities_3.addFeatures(features_ParkandRecreationFacilities_3);
var lyr_ParkandRecreationFacilities_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParkandRecreationFacilities_3, 
                style: style_ParkandRecreationFacilities_3,
                popuplayertitle: 'ParkandRecreationFacilities',
                interactive: false,
                title: '<img src="styles/legend/ParkandRecreationFacilities_3.png" /> ParkandRecreationFacilities'
            });
var format_EPCenterLineEPCenterline_4 = new ol.format.GeoJSON();
var features_EPCenterLineEPCenterline_4 = format_EPCenterLineEPCenterline_4.readFeatures(json_EPCenterLineEPCenterline_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EPCenterLineEPCenterline_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EPCenterLineEPCenterline_4.addFeatures(features_EPCenterLineEPCenterline_4);
var lyr_EPCenterLineEPCenterline_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EPCenterLineEPCenterline_4, 
                style: style_EPCenterLineEPCenterline_4,
                popuplayertitle: 'EPCenterLine — EPCenterline',
                interactive: false,
                title: 'EPCenterLine — EPCenterline'
            });

lyr_ESRISatelliteArcGISWorld_Imagery_0.setVisible(true);lyr_CityLimitsCountyBoundary_1.setVisible(true);lyr_Isochrones_2.setVisible(true);lyr_ParkandRecreationFacilities_3.setVisible(true);lyr_EPCenterLineEPCenterline_4.setVisible(true);
var layersList = [lyr_ESRISatelliteArcGISWorld_Imagery_0,lyr_CityLimitsCountyBoundary_1,lyr_Isochrones_2,lyr_ParkandRecreationFacilities_3,lyr_EPCenterLineEPCenterline_4];
lyr_CityLimitsCountyBoundary_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'OBJECTID': 'OBJECTID', 'GlobalID': 'GlobalID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Isochrones_2.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_ParkandRecreationFacilities_3.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'OBJECTID': 'OBJECTID', 'facilityid': 'facilityid', 'facilityar': 'facilityar', 'fulladdr': 'fulladdr', 'county': 'county', 'mgmtunit': 'mgmtunit', 'phone': 'phone', 'agencyurl': 'agencyurl', 'operdays': 'operdays', 'operhours': 'operhours', 'pocname': 'pocname', 'pocphone': 'pocphone', 'pocemail': 'pocemail', 'numparking': 'numparking', 'restroom': 'restroom', 'handicap': 'handicap', 'resortinn': 'resortinn', 'cabins': 'cabins', 'rvcamp': 'rvcamp', 'tentcamp': 'tentcamp', 'backcamp': 'backcamp', 'campstore': 'campstore', 'meetingrm': 'meetingrm', 'grpcamp': 'grpcamp', 'grplodge': 'grplodge', 'visitctr': 'visitctr', 'museum': 'museum', 'restaurant': 'restaurant', 'snackbar': 'snackbar', 'laundry': 'laundry', 'waterski': 'waterski', 'marina': 'marina', 'boatlaunch': 'boatlaunch', 'boatrent': 'boatrent', 'canoe': 'canoe', 'boatcruise': 'boatcruise', 'swimming': 'swimming', 'fishing': 'fishing', 'stables': 'stables', 'archery': 'archery', 'tennis': 'tennis', 'hiking': 'hiking', 'picnic': 'picnic', 'hunting': 'hunting', 'roadcycle': 'roadcycle', 'mtbcycle': 'mtbcycle', 'playground': 'playground', 'golf': 'golf', 'discgolf': 'discgolf', 'reserveurl': 'reserveurl', 'dayfee': 'dayfee', 'campfee': 'campfee', 'factype': 'factype', 'municipali': 'municipali', 'agency': 'agency', 'agencytype': 'agencytype', 'beach': 'beach', 'ski': 'ski', 'soccer': 'soccer', 'baseball': 'baseball', 'basketball': 'basketball', 'comments': 'comments', 'dogs': 'dogs', 'CreationDa': 'CreationDa', 'Creator': 'Creator', 'EditDate': 'EditDate', 'Editor': 'Editor', 'status': 'status', 'PicUrl': 'PicUrl', 'routenum': 'routenum', 'routenum2': 'routenum2', });
lyr_EPCenterLineEPCenterline_4.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'OBJECTID_1': 'OBJECTID_1', 'DIR': 'DIR', 'STREETNAME': 'STREETNAME', 'STYPE': 'STYPE', 'FROMLEFT': 'FROMLEFT', 'FROMRIGHT': 'FROMRIGHT', 'TORIGHT': 'TORIGHT', 'TOLEFT': 'TOLEFT', 'CLASS': 'CLASS', 'ZIPR': 'ZIPR', 'ZIPL': 'ZIPL', 'MUNR': 'MUNR', 'MUNL': 'MUNL', 'PLANAREA': 'PLANAREA', 'GlobalID': 'GlobalID', 'Shape_Length': 'Shape_Length', });
lyr_CityLimitsCountyBoundary_1.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'OBJECTID': '', 'GlobalID': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_Isochrones_2.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'Range', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_ParkandRecreationFacilities_3.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'OBJECTID': 'Range', 'facilityid': 'TextEdit', 'facilityar': 'TextEdit', 'fulladdr': 'TextEdit', 'county': 'TextEdit', 'mgmtunit': 'TextEdit', 'phone': 'TextEdit', 'agencyurl': 'TextEdit', 'operdays': 'TextEdit', 'operhours': 'TextEdit', 'pocname': 'TextEdit', 'pocphone': 'TextEdit', 'pocemail': 'TextEdit', 'numparking': 'TextEdit', 'restroom': 'TextEdit', 'handicap': 'TextEdit', 'resortinn': 'TextEdit', 'cabins': 'TextEdit', 'rvcamp': 'TextEdit', 'tentcamp': 'TextEdit', 'backcamp': 'TextEdit', 'campstore': 'TextEdit', 'meetingrm': 'TextEdit', 'grpcamp': 'TextEdit', 'grplodge': 'TextEdit', 'visitctr': 'TextEdit', 'museum': 'TextEdit', 'restaurant': 'TextEdit', 'snackbar': 'TextEdit', 'laundry': 'TextEdit', 'waterski': 'TextEdit', 'marina': 'TextEdit', 'boatlaunch': 'TextEdit', 'boatrent': 'TextEdit', 'canoe': 'TextEdit', 'boatcruise': 'TextEdit', 'swimming': 'TextEdit', 'fishing': 'TextEdit', 'stables': 'TextEdit', 'archery': 'TextEdit', 'tennis': 'TextEdit', 'hiking': 'TextEdit', 'picnic': 'TextEdit', 'hunting': 'TextEdit', 'roadcycle': 'TextEdit', 'mtbcycle': 'TextEdit', 'playground': 'TextEdit', 'golf': 'TextEdit', 'discgolf': 'TextEdit', 'reserveurl': 'TextEdit', 'dayfee': 'TextEdit', 'campfee': 'TextEdit', 'factype': 'TextEdit', 'municipali': 'TextEdit', 'agency': 'TextEdit', 'agencytype': 'TextEdit', 'beach': 'TextEdit', 'ski': 'TextEdit', 'soccer': 'TextEdit', 'baseball': 'TextEdit', 'basketball': 'TextEdit', 'comments': 'TextEdit', 'dogs': 'TextEdit', 'CreationDa': 'TextEdit', 'Creator': 'TextEdit', 'EditDate': 'TextEdit', 'Editor': 'TextEdit', 'status': 'TextEdit', 'PicUrl': 'TextEdit', 'routenum': 'TextEdit', 'routenum2': 'TextEdit', });
lyr_EPCenterLineEPCenterline_4.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'OBJECTID_1': 'Range', 'DIR': 'TextEdit', 'STREETNAME': 'TextEdit', 'STYPE': 'TextEdit', 'FROMLEFT': 'TextEdit', 'FROMRIGHT': 'TextEdit', 'TORIGHT': 'TextEdit', 'TOLEFT': 'TextEdit', 'CLASS': 'TextEdit', 'ZIPR': 'TextEdit', 'ZIPL': 'TextEdit', 'MUNR': 'TextEdit', 'MUNL': 'TextEdit', 'PLANAREA': 'TextEdit', 'GlobalID': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr_CityLimitsCountyBoundary_1.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'OBJECTID': 'no label', 'GlobalID': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Isochrones_2.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'CENTER_LON': 'no label', 'CENTER_LAT': 'no label', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', });
lyr_ParkandRecreationFacilities_3.set('fieldLabels', {'id': 'no label', 'Name': 'inline label - visible with data', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'OBJECTID': 'no label', 'facilityid': 'no label', 'facilityar': 'no label', 'fulladdr': 'no label', 'county': 'no label', 'mgmtunit': 'no label', 'phone': 'no label', 'agencyurl': 'no label', 'operdays': 'no label', 'operhours': 'no label', 'pocname': 'no label', 'pocphone': 'no label', 'pocemail': 'no label', 'numparking': 'no label', 'restroom': 'no label', 'handicap': 'no label', 'resortinn': 'no label', 'cabins': 'no label', 'rvcamp': 'no label', 'tentcamp': 'no label', 'backcamp': 'no label', 'campstore': 'no label', 'meetingrm': 'no label', 'grpcamp': 'no label', 'grplodge': 'no label', 'visitctr': 'no label', 'museum': 'no label', 'restaurant': 'no label', 'snackbar': 'no label', 'laundry': 'no label', 'waterski': 'no label', 'marina': 'no label', 'boatlaunch': 'no label', 'boatrent': 'no label', 'canoe': 'no label', 'boatcruise': 'no label', 'swimming': 'no label', 'fishing': 'no label', 'stables': 'no label', 'archery': 'no label', 'tennis': 'no label', 'hiking': 'no label', 'picnic': 'no label', 'hunting': 'no label', 'roadcycle': 'no label', 'mtbcycle': 'no label', 'playground': 'no label', 'golf': 'no label', 'discgolf': 'no label', 'reserveurl': 'no label', 'dayfee': 'no label', 'campfee': 'no label', 'factype': 'no label', 'municipali': 'no label', 'agency': 'no label', 'agencytype': 'no label', 'beach': 'no label', 'ski': 'no label', 'soccer': 'no label', 'baseball': 'no label', 'basketball': 'no label', 'comments': 'no label', 'dogs': 'no label', 'CreationDa': 'no label', 'Creator': 'no label', 'EditDate': 'no label', 'Editor': 'no label', 'status': 'no label', 'PicUrl': 'no label', 'routenum': 'no label', 'routenum2': 'no label', });
lyr_EPCenterLineEPCenterline_4.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'OBJECTID_1': 'no label', 'DIR': 'no label', 'STREETNAME': 'no label', 'STYPE': 'no label', 'FROMLEFT': 'no label', 'FROMRIGHT': 'no label', 'TORIGHT': 'no label', 'TOLEFT': 'no label', 'CLASS': 'no label', 'ZIPR': 'no label', 'ZIPL': 'no label', 'MUNR': 'no label', 'MUNL': 'no label', 'PLANAREA': 'no label', 'GlobalID': 'no label', 'Shape_Length': 'no label', });
lyr_EPCenterLineEPCenterline_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});