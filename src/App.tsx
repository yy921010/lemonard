import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Navbar } from '@/components';
import routes from '@/router';
import './index.css';

const App = (): JSX.Element => {
    return (
        <>
            <Navbar />
            <section className="flex flex-col items-center h-full container">
                <section className="flex-1">
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
            </section>
        </>
    );
};

export default App;
