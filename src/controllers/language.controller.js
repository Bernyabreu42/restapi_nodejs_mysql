import { getConnection } from '../database/database';

const getLanguages = async (req, res) => {

   try {
      const connection = await getConnection()
      const result = await connection.query("SELECT id, name, programmers FROM language")
      console.log(result)
      res.json(result)
   } catch (error) {
      res.status(500)
      res.send(error.message)
   }

}

const filterForId = async (req, res) => {

   try {
      const { id } = req.params
      const connection = await getConnection()

      const result = await connection.query("SELECT * FROM language WHERE id = ?", id)
      res.json(result)

   } catch (error) {
      res.status(500)
      res.send(error.message)
   }

}


const deleteLanguage = async (req, res) => {

   try {
      const { id } = req.params
      const connection = await getConnection()

      await connection.query("DELETE FROM language WHERE id = ?", id)
      res.json({ message: "Language deleted" })

   } catch (error) {
      res.status(500)
      res.send(error.message)
   }

}


const addLanguage = async (req, res) => {

   try {
      const { name, programmers } = req.body

      if (name === undefined || programmers === undefined) {
         res.status(400).json({ message: "Bad Request. Please fill all field" })
      }

      const language = { name, programmers }

      const connection = await getConnection();

      //usamos set en ves de (...) valus (...), set revice un objeto con los datos que rellenaran la tabla
      await connection.query("INSERT INTO language SET ?", language)

      res.json({ message: "language added" })

   } catch (error) {
      res.status(500)
      res.send(error.message)
   }

}

const updateLanguage = async (req, res) => {

   try {
      const { id } = req.params
      const { name, programmers } = req.body

      if (name === undefined || programmers === undefined) {
         res.status(400).json({ message: "Bad Request. Please fill all field" })
      }

      const language = { name, programmers }

      const connection = await getConnection();

      //usamos set en ves de (...) valus (...), set revice un objeto con los datos que rellenaran la tabla
      await connection.query("UPDATE language SET ? WHERE id = ?", [language, id])

      res.json({ message: "language updated" })

   } catch (error) {
      res.status(500)
      res.send(error.message)
   }

}

export const methods = {
   getLanguages,
   filterForId,
   addLanguage,
   deleteLanguage,
   updateLanguage
}