import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Navbar, Footer } from '@/router/common';
import routes from '@/router';
import 'twin.macro';

const App = (): JSX.Element => {
    return (
        <>
            <Navbar />
            <section tw="bg-black bg-opacity-90 text-gray-100 flex-1 pb-20">
                <Switch>
                    <Redirect exact from="/" to="/home" />
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
        </>
    );
};

export default App;
