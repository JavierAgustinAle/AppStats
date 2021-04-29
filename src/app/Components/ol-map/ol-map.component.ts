import { AfterViewInit, Component, OnInit, Input, ElementRef } from '@angular/core';

// OpenLayers
import Map from 'ol/Map';
import 'ol/ol.css';
import BingMaps from 'ol/source/BingMaps';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import * as Proj from 'ol/proj';
import { defaults as defaultControls } from 'ol/control';


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

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.mapEl = this.elementRef.nativeElement.querySelector('#map');
    this.setSize();

    this.map = new Map({
      target: 'map',
      layers: [
        // new TileLayer({
        //   source: new XYZ({
        //     url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        //   })
        // })
        new TileLayer({
          visible: true,
          preload: Infinity,
          source: new BingMaps({
            key: 'AtEpLnaZJDXX4L0gccMBrm_wqpZA2fWs50jj4bf1l4_3MhmG27VIibiu6ZcS8mwf',
            imagerySet: 'AerialWithLabelsOnDemand'
          }),
        })
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

