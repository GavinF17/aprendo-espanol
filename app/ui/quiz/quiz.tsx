'use client'

import React, { useState } from 'react'
import clsx from 'clsx'
import Image from 'next/image'

type QuestionOption = {
  id: string
  englishLabel: string
  spanishLabel: string
  // imageUrl?: string
  bgColor?: string
  // bgImageUrl?: string
}

type Question = QuestionOption & {
  options: number[]
  guess?: number
  status: 'unanswered' | 'correct' | 'incorrect'
}

const shuffle = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

function getRandomInt(min: number, max: number) {
  const minCeiled = Math.ceil(min)
  const maxFloored = Math.floor(max)
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)
}

const getOptions = (
  colours: QuestionOption[],
  currentIndex: number,
): number[] => {
  const options: number[] = [currentIndex]

  if (colours.length < 3) {
    throw new Error('Not enough options')
  }

  while (options.length < 3) {
    const index = getRandomInt(0, colours.length)

    if (index !== currentIndex && !options.includes(index)) {
      options.push(index)
    }
  }

  return shuffle(options)
}

const getQuestions = (questionOptions: QuestionOption[]): Question[] => {
  const shuffled = shuffle(questionOptions) as QuestionOption[] // TODO: type?

  return shuffled.map((option, i) => ({
    ...option,
    status: 'unanswered',
    options: getOptions(questionOptions, i),
  }))
}

type Label = 'englishLabel' | 'spanishLabel'
const labels: Record<string, { questionLabel: Label; answerLabel: Label }> = {
  spanish: { questionLabel: 'spanishLabel', answerLabel: 'englishLabel' },
  english: { questionLabel: 'englishLabel', answerLabel: 'spanishLabel' },
}

export default function Quiz({
  questionOptions,
}: {
  questionOptions: QuestionOption[]
}) {
  const [questionLanguage, setQuestionLanguage] = useState<
    'spanish' | 'english'
  >('spanish')
  const [questions, setQuestions] = useState<Question[]>(
    getQuestions([...questionOptions]),
  )
  const [qIndex, setQIndex] = useState<number>(0)

  const { questionLabel, answerLabel } = labels[questionLanguage]

  const handleAnswer = (option: number) => {
    if (questions[qIndex].status !== 'unanswered') return

    const status = qIndex === option ? 'correct' : 'incorrect'

    setQuestions((prev) =>
      prev.map((o, i) => (i !== qIndex ? o : { ...o, status, guess: option })),
    )
  }

  const reset = () => {
    setQuestions(getQuestions([...questionOptions]))
    setQIndex(0)
  }

  const changeLanguage = () => {
    setQuestionLanguage((prevState) =>
      prevState === 'english' ? 'spanish' : 'english',
    )
    reset()
  }

  return (
    <div className="rounded-xl bg-gray-100 p-10 flex flex-col space-y-10 items-center">
      <div className="flex space-x-2">
        <Image
          src={questionLanguage === 'spanish' ? '/flag-es.svg' : '/flag-gb.svg'}
          alt="Flag ES"
          width={20}
          height={20}
          onClick={changeLanguage}
        />{' '}
        <span>{questions[qIndex][questionLabel]}</span>
      </div>
      <div className="inline-flex rounded-md shadow-sm">
        {questions[qIndex].options.map((option, index) => (
          <button
            key={option}
            onClick={() => handleAnswer(option)}
            // disabled={status === 'unanswered'}
            // className={clsx('bg-green-500', )}
            className={clsx(
              'px-8 py-2 text-sm font-medium text-gray-900 border-t border-b border-gray-200',
              {
                'bg-green-500':
                  questions[qIndex].status === 'correct' && option === qIndex,
                'bg-red-500':
                  questions[qIndex].status === 'incorrect' &&
                  option === questions[qIndex].guess,
                'bg-green-200':
                  questions[qIndex].status === 'incorrect' && option === qIndex,
                'bg-white': questions[qIndex].status === 'unanswered',
              },
            )}
          >
            {questions[option][answerLabel]}
          </button>
        ))}
      </div>
      <div>
        <button
          onClick={() =>
            qIndex < questions.length - 1 ? setQIndex(qIndex + 1) : reset()
          }
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 disabled:bg-gray-100 disabled:text-gray-400"
          disabled={questions[qIndex].status === 'unanswered'}
        >
          {qIndex < questions.length - 1 ? 'Next' : 'Reset'}
        </button>
      </div>
      <div className="flex space-x-4">
        <span className="text-gray-600">
          Question {qIndex + 1}/{questions.length}
        </span>
        <span className="text-green-600">
          Correct{' '}
          {questions.filter(({ status }) => status === 'correct').length}
        </span>
        <span className="text-red-600">
          Incorrect{' '}
          {questions.filter(({ status }) => status === 'incorrect').length}
        </span>
      </div>
    </div>
  )
}
