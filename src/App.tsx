import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Footer, Navbar } from '@/components';
import routes from '@/router';
import { MainBody, Content } from './App.style';
import './index.css';

const App = (): JSX.Element => {
    return (
        <>
            <Navbar />
            <MainBody>
                <Content>
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
                </Content>
                <Footer />
            </MainBody>
        </>
    );
};

export default App;
