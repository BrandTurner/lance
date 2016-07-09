"use strict";

const Serializable = require('./Serializable');


class PhysicalObject extends Serializable {

    static get properties() {
        return {
            id: 7, // class id
            name: "PhysicalObject"
        };
    }

    static get netScheme() {
        return {
            id: {
                type: Serializable.TYPES.UINT8
            },
            x: {
                type: Serializable.TYPES.FLOAT32
            },
            y: {
                type: Serializable.TYPES.FLOAT32
            },
            z: {
                type: Serializable.TYPES.FLOAT32
            },
            rx: {
                type: Serializable.TYPES.FLOAT32
            },
            ry: {
                type: Serializable.TYPES.FLOAT32
            },
            rz: {
                type: Serializable.TYPES.FLOAT32
            },
            velX: {
                type: Serializable.TYPES.FLOAT32
            },
            velY: {
                type: Serializable.TYPES.FLOAT32
            },
            velZ: {
                type: Serializable.TYPES.FLOAT32
            }
        }
    }

    serialize() {
        return super.serialize(arguments);
    }

    constructor(id, x, y, z, rx, ry, rz) {
        super();
        this.id = id; //instance id
        this.x = x;
        this.y = y;
        this.z = z;
        this.rx = rx;
        this.ry = ry;
        this.rz = rz;
        this.velX = 0;
        this.velY = 0;
        this.velZ = 0;
        this.renderer = null;
        this.renderObject = null;
        this.physicsEngine = null;
        this.physicalObject = null;
        this.class = PhysicalObject;
    }

    // intialize physics for this object
    initPhysics(physicsEngine) {
        if (!this.physicalObject) {
            this.physicsEngine = physicsEngine;
            this.physicalObject = physicsEngine.addObject(this.id);
        }
    }

    // initialize rendering for this object
    initRender(renderer) {
        if (!this.renderObject) {
            this.renderer = renderer;
            this.renderObject = renderer.addObject(this.id);
        }
    }


    // release resources
    destroy() {
        console.log(`destroying object ${this.id}`);

        // destroy the physicalObject
        if (this.physicalObject) {
            this.physicsEngine.removeObject(this.physicalObject);
        }

        // destroy the renderObject
        if (this.renderObject) {
            this.renderer.removeObject(this.renderObject);
        }
    }


}

module.exports = PhysicalObject;
