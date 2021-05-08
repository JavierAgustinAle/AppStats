import { AfterViewInit, Component, OnInit, Input, ElementRef } from '@angular/core';

// OpenLayers
import Map from 'ol/Map';
import 'ol/ol.css';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import * as Proj from 'ol/proj';
import { defaults as defaultControls } from 'ol/control';
import { Feature } from 'ol';
import Point from 'ol/geom/Point';
import { Icon, Style } from 'ol/style';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import OSM from 'ol/source/OSM';

export const DEFAULT_HEIGHT = '500px';
export const DEFAULT_WIDTH = '500px';

@Component({
  selector: 'app-ol-map',
  templateUrl: './ol-map.component.html',
  styleUrls: ['./ol-map.component.css']
})
export class OlMapComponent implements OnInit, AfterViewInit {
  @Input() lat: number;
  @Input() lng: number;
  @Input() zoom: number;
  @Input() width: string | number = DEFAULT_WIDTH;
  @Input() height: string | number = DEFAULT_HEIGHT;

  map: Map;

  private mapEl: HTMLElement;
  location;
  vectorSource;
  vectorLayer;
  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.mapEl = this.elementRef.nativeElement.querySelector('#map');
    this.setSize();

    this.location = new Feature({
      geometry: new Point(Proj.fromLonLat([this.lng, this.lat]))
    });


    this.location.setStyle(new Style({
      image: new Icon(({
        color: '#131214',
        crossOrigin: 'anonymous',
        src: 'assets/point.svg',
        imgSize: [20, 20]
      }))
    }));

    this.vectorSource = new VectorSource({
      features: [this.location]
    });

    this.vectorLayer = new VectorLayer({
      source: this.vectorSource
    });

    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM()
        }),
        this.vectorLayer
      ],
      view: new View({
        center: Proj.fromLonLat([this.lng, this.lat]),
        zoom: this.zoom
      }),
      controls: defaultControls().extend([])
    });

  }

  private setSize(): void {
    if (this.mapEl) {
      const styles = this.mapEl.style;
      styles.height = coerceCssPixelValue(this.height) || DEFAULT_HEIGHT;
      styles.width = coerceCssPixelValue(this.width) || DEFAULT_WIDTH;
    }
  }

}

const cssUnitsPattern = /([A-Za-z%]+)$/;

function coerceCssPixelValue(value: any): string {
  if (value == null) {
    return '';
  }

  return cssUnitsPattern.test(value) ? value : `${value}px`;


}

