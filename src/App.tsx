import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Footer, Navbar } from '@/components';
import routes from '@/router';
import { MainBody, Content } from './App.style';
import GlobalStyle from './global.style';

const App = (): JSX.Element => {
    return (
        <>
            <GlobalStyle />
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
