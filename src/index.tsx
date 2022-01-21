
import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';

import createEngine, { 
  DefaultLinkModel, 
  DefaultNodeModel,
  DiagramModel 
} from '@projectstorm/react-diagrams';

import {
  CanvasWidget
} from '@projectstorm/react-canvas-core';

// create an instance of the engine with all the defaults
const engine = createEngine();

// node 1
const node1 = new DefaultNodeModel({
  name: 'E22_Man-Made_Object',
  color: 'rgb(0,192,255)',
});
node1.setPosition(100, 100);
let port1 = node1.addOutPort('');

// node 2
const node2 = new DefaultNodeModel({
  name: 'E12_Production',
  color: 'rgb(0,192,255)',
});
node2.setPosition(400, 200);
let port2 = node2.addOutPort('');

// link them and add a label to the link
const link = port1.link<DefaultLinkModel>(port2);
link.addLabel('crm:P108i_was_produced_by');

const model = new DiagramModel();
model.addAll(node1, node2, link);
engine.setModel(model);

const canvas = <CanvasWidget className="diagram-container" engine={engine} />;


ReactDOM.render(
    canvas,
  document.getElementById('application')
);