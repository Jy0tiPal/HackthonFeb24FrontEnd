import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Navbar from './MYComponents/Navbar';
import Footer from './MYComponents/Footer';
import LogsList from './MYComponents/Loglist';
import AddLogs from './MYComponents/AddLogs';

export default function NavRendering() {
  return <BrowserRouter>
  <Navbar />

  <Switch>

      <LogsList path="/loglist" exact component={LogsList} />

      <AddLogs path="/AddLogs" exact component={AddLogs} />

  </Switch>
  <Footer />

</BrowserRouter>
}
