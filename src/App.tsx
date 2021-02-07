import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Navbar, Footer } from '@/components';
import routes from '@/router';
import 'twin.macro';

const App = (): JSX.Element => {
    return (
        <>
            <Navbar />
            <section tw="flex flex-col items-center">
                <section tw="w-full flex-shrink bg-black bg-opacity-90 text-gray-100">
                    <Switch>
                        {routes && routes.length > 0
                            ? routes.map((item) => {
                                  return (
                                      <Route
                                          key={item.name}
                                          exact={item.exact}
                                          path={item.path}
                                          component={item.component}
                                      />
                                  );
                              })
                            : ''}
                    </Switch>
                </section>
                <Footer />
            </section>
        </>
    );
};

export default App;
