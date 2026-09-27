import { useState, type ReactNode } from 'react'
import './App.css'

type CardProps = {
  title: string
  children: ReactNode
}

function Card({ title, children }: CardProps) {
  return (
    <section className="card">
      <h2>{title}</h2>
      {children}
    </section>
  )
}

type TextInputProps = {
  value: string
  onChange: (value: string) => void
}

function TextInput({ value, onChange }: TextInputProps) {
  return (
    <label className="field">
      <span>Текст для предпросмотра</span>
      <input
        type="text"
        id="text-input"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Напиши что-нибудь о React..."
      />
    </label>
  )
}

type TextPreviewProps = {
  text: string
}

function TextPreview({ text }: TextPreviewProps) {
  return (
    <div className="preview" aria-live="polite">
      <span>Предпросмотр</span>
      <p className={text ? 'preview-text' : 'preview-text placeholder'}>
        {text || 'Введённый текст появится здесь.'}
      </p>
      <small>{text.length} символов</small>
    </div>
  )
}

function FormParent() {
  const [text, setText] = useState('')

  return (
    <Card title="Одна запись, два представления">
      <p className="card-label">FormParent хранит общее состояние text.</p>
      <div className="editor-grid" id="practice">
        <TextInput value={text} onChange={setText} />
        <TextPreview text={text} />
      </div>
    </Card>
  )
}

function App() {
  return (
    <main className="app-shell">
      <header className="page-heading">
        <p className="eyebrow">HOMEWORK · LESSON 14</p>
        <h1>Композиция компонентов</h1>
        <p>Общая карточка и текст, который обновляется сразу при вводе.</p>
      </header>

      <FormParent />

      <div className="card-grid">
        <Card title="Состояние у родителя">
          <ol className="steps-list">
            <li>FormParent хранит значение text.</li>
            <li>TextInput передаёт изменения через onChange.</li>
            <li>TextPreview получает text через props.</li>
          </ol>
        </Card>
        <Card title="Переиспользуемая оболочка">
          <p className="card-copy">
            Card задаёт рамку, отступы и заголовок. Разное содержимое передаётся
            через children.
          </p>
          <a className="text-link" href="#text-input">
            Перейти к полю ввода <span aria-hidden="true">↗</span>
          </a>
        </Card>
      </div>
    </main>
  )
}

export default App
