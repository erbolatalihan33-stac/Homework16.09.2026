import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'

function Home() {
  return (
    <main className="page-content">
      <p className="eyebrow">HOME · ГЛАВНАЯ</p>
      <h1>Главная страница</h1>
      <p className="lead">
        Небольшое React-приложение с переходами между страницами без перезагрузки.
      </p>
      <section className="page-panel">
        <span className="panel-number">01</span>
        <div>
          <h2>Маршрутизация работает</h2>
          <p>
            Выбери страницу в меню. Адрес браузера изменится, а приложение останется открытым.
          </p>
        </div>
      </section>
    </main>
  )
}

function About() {
  return (
    <main className="page-content">
      <p className="eyebrow">ABOUT · О НАС</p>
      <h1>О нас</h1>
      <p className="lead">
        Эта страница связана с адресом /about через компонент Route.
      </p>
      <section className="page-panel">
        <span className="panel-number">02</span>
        <div>
          <h2>React Router</h2>
          <p>
            BrowserRouter включает маршрутизацию, Routes содержит маршруты,
            а Route связывает URL с компонентом страницы.
          </p>
        </div>
      </section>
    </main>
  )
}

function Contact() {
  return (
    <main className="page-content">
      <p className="eyebrow">CONTACTS · КОНТАКТЫ</p>
      <h1>Контакты</h1>
      <p className="lead">
        Третья страница приложения доступна по адресу /contacts.
      </p>
      <section className="page-panel">
        <span className="panel-number">03</span>
        <div>
          <h2>Всё на своих местах</h2>
          <p>
            Внутренние переходы выполняются компонентом Link, поэтому браузер не перезагружает страницу.
          </p>
        </div>
      </section>
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="router-app">
        <header className="site-header">
          <Link className="brand" to="/">
            <span className="brand-mark">R</span>
            <span>React Router<small>урок 15</small></span>
          </Link>
          <nav className="main-nav" aria-label="Основная навигация">
            <Link to="/">Главная</Link>
            <Link to="/about">О нас</Link>
            <Link to="/contacts">Контакты</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contact />} />
        </Routes>
        <footer className="site-footer">React · BrowserRouter · Link</footer>
      </div>
    </BrowserRouter>
  )
}

export default App
