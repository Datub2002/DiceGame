import React from 'react';
import { animated, useSprings } from 'react-spring';

function UseSprings() {

    let arrOpacity = [
        { opacity: 0.1, color: 'red', content: 'FullStack',num : 2000 },
        { opacity: 0.3, color: 'green', content: 'FE',num : 1000  },
        { opacity: 0.7, color: 'blue', content: 'BE',num : 3000  },

    ];
    let propsAnimationUseSprings = useSprings(arrOpacity.length, arrOpacity.map(
        item => {
            return {
                opacity: item.opacity,
                color: item.color,
                content: item.content,
                num : item.num,
                from: {
                    opacity: 0,
                    color: 'black',
                    num : 0,

                },
                config: {
                    duration: 3000
                }
            }
        }
    ));




    console.log(propsAnimationUseSprings)
    //trả về 1 mảng gồm các obj có key và value ở trên, số phần tử giống với số ptu mảng ban đầu
    return (
        <div>
            {
                propsAnimationUseSprings.map((propsAnim, index) => {
                    console.log(propsAnim)
                    return <div>

                        <animated.h1 key={0} style={propsAnim}>
                            {propsAnim.content} 
                        </animated.h1>
                        <animated.h1 key={1} style={propsAnim}>
                            {propsAnim.num} 
                        </animated.h1>
                    </div>
                })
            }
        </div>
    );
}

export default UseSprings;