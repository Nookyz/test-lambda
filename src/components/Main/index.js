import React from "react"

// Components
import Form from "@components/Form/index"
import Selection from "@components/Selection/index"
// Styled-components global
import Container from "@ui/Container"
// Styled-components
import Grid from "./Grid"
import Sidebar from "./Sidebar"
import Price from "./Price"
import Button from "./Button"
import Main from "./Main"
import Desc from "./Desc"
// Context
import { useTranslation } from "@context//LanguageContext"
import { useForm } from "@context//FormContext"
// helper
import { chooseCoefficientSpeed } from "@/helper/chooseCoefficientSpeed"
import { timeSpentFor } from "@/helper/timeSpentFor"
import { calculatePrice } from "@/helper/calculatePrice"
import { calculateResultDate } from "@/helper/calculateResultDate"
import { formatDate } from "@/helper/formatDate"

const MyMain = () => {
  const { main } = useTranslation()

  const { textarea, radio } = useForm()

  let coefficientSpeed
  let workDuration
  let price
  let resultDate
  let result

  if (textarea.length > 0 && radio) {
    coefficientSpeed = chooseCoefficientSpeed(radio)

    workDuration = timeSpentFor(textarea.length, radio)

    price = calculatePrice(textarea.length, coefficientSpeed)

    resultDate = calculateResultDate(workDuration)

    result = formatDate(resultDate)
  }

  return (
    <Container>
      <Grid>
        <Main>
          <Form />
          <Selection />
        </Main>

        <Sidebar>
          <Price>
            <div>{textarea.length > 0 && radio !== undefined ? `${price} грн` : "0,00  грн"}</div>

            <Desc>{textarea.length > 0 && radio !== undefined ? result : null}</Desc>
          </Price>
          <Button>{main?.button}</Button>
        </Sidebar>
      </Grid>
    </Container>
  )
}

export default MyMain
