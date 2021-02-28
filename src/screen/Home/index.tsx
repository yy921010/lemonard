import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import React, { useState } from 'react';
import 'twin.macro';

const Home = (): JSX.Element => {
    const [selectedId, setSelectedId] = useState<string>('');

    const items = [
        {
            id: '1',
            subtitle: 'subtitle',
            title: 'sssss',
        },
        {
            id: '12',
            subtitle: 'subtitle12',
            title: 'sssss',
        },
        {
            id: '13',
            subtitle: 'subtitle13',
            title: 'sssss',
        },
        {
            id: '14',
            subtitle: 'subtitle24',
            title: 'sssss',
        },
    ];
    return (
        <div tw="mt-36">
            <AnimateSharedLayout type="crossfade">
                <motion.div tw="grid grid-cols-3">
                    {items.map((item) => (
                        <motion.div
                            layoutId={item.id}
                            key={item.id}
                            tw="w-32 h-32 border"
                            onClick={() => setSelectedId(item.id)}
                        >
                            <motion.h5>{item.subtitle}</motion.h5>
                            <motion.h2>{item.title}</motion.h2>
                        </motion.div>
                    ))}
                </motion.div>

                <AnimatePresence>
                    {selectedId && (
                        <motion.div layoutId={selectedId} tw="absolute w-32 h-32 border">
                            <motion.h5>1</motion.h5>
                            <motion.h2>222</motion.h2>
                            <motion.button
                                onClick={() => {
                                    setSelectedId('');
                                }}
                            >
                                bu
                            </motion.button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </AnimateSharedLayout>
        </div>
    );
};
export default Home;
