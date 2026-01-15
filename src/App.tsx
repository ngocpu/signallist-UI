import React, { Suspense, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import routes from '@/routes/routerConfig'
import CompanyProfileWidget from './components/CompanyProfileWidget'

export default function App(): React.ReactNode {
  useEffect(() => {
      const handleMessage = (event: MessageEvent) => {
        console.log("INCOMMING", event)
      };
  
      window.addEventListener("message", handleMessage);
      return () => window.removeEventListener("message", handleMessage);
    }, []);
  const renderRoutes = (routeConfigs: any[] | undefined): React.ReactNode => {
    if (!Array.isArray(routeConfigs)) return null
    return routeConfigs.map((route, idx) => {
      const elementValue = route.element
      let elementProp: React.ReactNode | undefined

      if (!elementValue) elementProp = undefined
      else if (React.isValidElement(elementValue)) elementProp = elementValue
      else {
        const Component = elementValue as React.ComponentType<any>
        elementProp = <Component />
      }

      const key = route.path ?? `route-${idx}`
      return (
        <Route key={key} path={route.path} element={elementProp}>
          {route.children && renderRoutes(route.children)}
        </Route>
      )
    })
  }

  return (
    <div className="app-container w-full h-screen">
      {/* <Suspense fallback={<div>Loading...</div>}>
        <Routes>{renderRoutes(Array.isArray(routes) ? routes : [])}</Routes>
      </Suspense> */}
      <CompanyProfileWidget />
    </div>
  )
}
