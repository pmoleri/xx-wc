import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IgcPieChartModule } from '@infragistics/igniteui-webcomponents-charts';
import { ModuleManager } from '@infragistics/igniteui-webcomponents-core';

ModuleManager.register(IgcPieChartModule);

@customElement('app-master-view')
export default class MasterView extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .pie-chart {
      min-width: 250px;
      min-height: 250px;
      flex-grow: 1;
      flex-basis: 0;
    }
  `;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <igc-pie-chart label-member-path="Id" value-member-path="NetHashesPerSecond" class="pie-chart"></igc-pie-chart>
    `;
  }
}
