import { useEffect } from "react";
import 'ol/ol.css';
import 'ol-layerswitcher/dist/ol-layerswitcher.css';
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import TileWMS from 'ol/source/TileWMS';

const direcionServicioWMS = 'http://192.168.3.10:81/servicio/wms',

    versionWMS = '1.3.0';
const sectores = new TileLayer({ source: new TileWMS({ url: direcionServicioWMS, params: { 'LAYERS': 'sectores', 'TILED': true, 'FORMAT': formatoPNG, VERSION: versionWMS }, serverType: 'mapserver', transition: 0 }), title: 'Sectores', visible: true });
const lotes = new TileLayer({ source: new TileWMS({ url: direcionServicioWMS, params: { 'LAYERS': 'lotes', 'TILED': true, 'FORMAT': formatoPNG, VERSION: versionWMS }, serverType: 'mapserver', transition: 0 }), title: 'Lotes', visible: true });

const MapComponent = () => {
    useEffect(() => {
        const map = new Map({
            target: "map",
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
                sectores,
                lotes,
            ],
            view: new View({
                center: [-8027972.053265133, -1494712.6860792257],
                zoom: 16,
            }),
        });

        return () => {

            map.setTarget(null);
        };
    }, []);

    return <div id="map"></div>;
};

export default MapComponent;
