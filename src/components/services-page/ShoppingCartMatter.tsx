import React, { useEffect } from 'react';
import Matter from 'matter-js';

import imgInteractiveCart from 'public/images/img-cart-roof.svg';
import Image from 'next/image';

const {
  Bodies,
  Engine,
  Events,
  Mouse,
  MouseConstraint,
  Render,
  Runner,
  World,
  Composite
} = Matter;

declare global {
  interface Window {
    engine: Matter.Engine;
    runner: Matter.Runner;
  }
}

export default function ShoppingCartMatter() {
  // const canvas = useRef(null);
  // const world = useRef<Matter.World>()
  // const engineRef = useRef<Matter.Engine>();
  // const runnerRef = useRef<Matter.Runner>();

  useEffect(() => {
    // module aliases
    const engine = Engine.create();
    const world = engine.world;

    const render = Render.create({
      element: document.getElementById('cart-container') || undefined,
      engine: engine,
      options: {
        width: 834,
        height: 421,
        showAngleIndicator: false,
        wireframes: false,
        background: 'transparent'
      }
    });

    // create two boxes and a ground
    const boxA = Bodies.circle(400, 200, 60, {
      render: {
        sprite: {
          texture: '/images/img-praxis.svg',
          xScale: 1,
          yScale: 1
        }
      }
    });
    const boxB = Bodies.circle(450, 50, 54, {
      render: {
        sprite: {
          texture: '/images/img-presta.svg',
          xScale: 1,
          yScale: 1
        }
      }
    });
    const boxC = Bodies.circle(400, 200, 42, {
      render: {
        sprite: {
          texture: '/images/img-zencart.svg',
          xScale: 1,
          yScale: 1
        }
      }
    });
    const boxD = Bodies.circle(450, 50, 70, {
      render: {
        sprite: {
          texture: '/images/img-woocommerce.svg',
          xScale: 1,
          yScale: 1
        }
      }
    });
    const boxE = Bodies.circle(400, 200, 51, {
      render: {
        sprite: {
          texture: '/images/img-opencart.svg',
          xScale: 1,
          yScale: 1
        }
      }
    });
    const boxF = Bodies.circle(450, 50, 52, {
      render: {
        sprite: {
          texture: '/images/img-100.svg',
          xScale: 1,
          yScale: 1
        }
      }
    });
    const boxG = Bodies.circle(450, 50, 70, {
      render: {
        sprite: {
          texture: '/images/img-magento.svg',
          xScale: 1,
          yScale: 1
        }
      }
    });
    const boxH = Bodies.circle(450, 50, 70, {
      render: {
        sprite: {
          texture: '/images/img-bigcommerce.svg',
          xScale: 1,
          yScale: 1
        }
      }
    });
    const boxI = Bodies.circle(450, 50, 70, {
      render: {
        sprite: {
          texture: '/images/img-shopify.svg',
          xScale: 1,
          yScale: 1
        }
      }
    });
    const boxJ = Bodies.circle(400, 50, 34, {
      render: {
        sprite: {
          texture: '/images/img-km.svg',
          xScale: 1,
          yScale: 1
        }
      }
    });

    const wallL = Bodies.rectangle(70, 200, 10, 450, {
      isStatic: true,
      render: {
        fillStyle: '#EBEBEB'
      },
      angle: Math.PI * 0.9
    });
    const wallR = Bodies.rectangle(770, 200, 10, 450, {
      isStatic: true,
      render: {
        fillStyle: '#EBEBEB'
      },
      angle: Math.PI * 0.09
    });
    const ground = Bodies.trapezoid(421, 415, 576, 10, -0.01, {
      isStatic: true,
      chamfer: { radius: [5, 0, 0, 5] },
      render: {
        fillStyle: '#EBEBEB',
        lineWidth: 0
      }
    });
    const roof = Bodies.rectangle(420, 0, 820, 20, {
      isStatic: true,
      render: {
        fillStyle: '#EBEBEB',
        lineWidth: 0
      }
    });

    // add all of the bodies to the world
    Composite.add(world, [
      boxA,
      boxB,
      boxC,
      boxD,
      boxE,
      boxF,
      boxG,
      boxH,
      boxI,
      boxJ,
      roof,
      wallL,
      wallR,
      ground
    ]);

    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false
        }
      }
    });

    Composite.add(world, mouseConstraint);

    render.mouse = mouse;
    Render.run(render);

    const runner = Runner.create();
    Runner.run(runner, engine);
  }, []);

  return (
    <div className="cart-interactive d-none d-lg-block" id="cart-container">
      <Image src={imgInteractiveCart} alt="" className="w-100 mb-4" />
    </div>
  );
}
