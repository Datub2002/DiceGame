import React from 'react';
import { useSpring, animated } from 'react-spring';
function DemoUseSpring(props) {


    const propsAnimation = useSpring({
        color: [244, 164, 96],
        from: { color: [205, 201, 201] },
        config: { duration: 3000 }
    })

    const animation = useSpring({


        from: {
            width: '0%',
            height: '0%',
            fontSize: '10px',

        }
        ,
        to: async (next, cancel) => {
            await next({ width: '100%', height: '100%', fontSize: '50px' })
            await next({ width: '50%', height: '50%', fontSize: '10px' })
            await next({ width: '100%', height: '100%', fontSize: '50px' })
        },
        config: {
            duration: 3000
        }


    }
    )






    return <div>

        <animated.h1 style={{
            color: propsAnimation.color.to((r, g, b) => {
                return `rgb(${r},${g},${b})`
            })
        }}>
            Changing rgb
        </animated.h1>
        <animated.h2 style={animation}>
            LOOK AT ME !!!
        </animated.h2>
    </div>

}

export default DemoUseSpring;