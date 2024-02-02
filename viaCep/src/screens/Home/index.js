import { useEffect, useState } from "react";
import { BoxInput } from "../../components/BoxInput";
import { ContainerForm, RowContainer, ScrollForm } from "./style";
import { Alert } from "react-native";
import axios from "axios";
import { Axios } from "react-native-axios";

export function Home () {



//Hooks - states
const [cep, setCep] = useState("1235");
const [Logradouro, setLogradouro] = useState("")
const [bairro, setBairro] = useState("")
const [cidade, setCidade] = useState("")
const [estado, setEstado] = useState("")
const [uf, setUf] = useState("")



//Hooks - effects

useEffect (async () => {
   //Chama da API

   function buscarCep(){
    try {
      if(cep != "" && cep.length === 8){
        const endereco = Axios.get(
          `https://viacep.com.br/ws/${cep}/json/`
        )
      }

      if (endereco.error){
        alert ("verifique o cep")
        return 
      }

      setLogradouro(endereco.data.Logradouro);
      setBairro (endereco.data.bairro);
      setCidade(enedereco.data.localidade)
      
    } catch (error) {
      console.log("Erro ao buscar o cep");
    }
  }
}, )
 

  

  return(
    //ScrollForm
    //ContainerForm
    //BoxInput
     //Label
     //Input
    <ScrollForm>
      <ContainerForm>
        <BoxInput
          textLabel = "Informe o cep" 
          placeholder = "Exemplo"
          fieldValue = {cep}
          editable = {true}
          maxLength = {9}
          minLength = {8}
          onChangeText= {tx => setCep(tx)}
          keyboardType="numeric"         
        />
        <BoxInput
          textLabel="Logradouro"
          placeholder="Logradouro..."                 
          maxLength= {50}
          minLength= {0}
        />
        <BoxInput
          textLabel="Bairro"
          placeholder="Bairro..."          
          maxLength= {50}
          minLength= {0}
        />
        <BoxInput
          textLabel="Cidade"
          placeholder="Cidade..."
          maxLength= {50}
          minLength= {0}
        />

        <RowContainer>
        <BoxInput
          textLabel="Estado"
          placeholder="Estado..."
          fieldWidth={70}
        />
        <BoxInput
          textLabel="UF"
          placeholder="UF..."
          fieldWidth={23}
        />
        </RowContainer>
      </ContainerForm>
    </ScrollForm>
  );
};

// ao carregar do componente
useEffect(() => {

}, []);//array dependências

// ao carregar do componente
// ao alterar do xpto
useEffect(() => {

}, [xpto]);//array dependências

// ao carregar do componente
// ao alterar do xpto
// ao desmontar do componente
useEffect(() => {
  return alert("fui desmontado,morri!!");
}, [xpto]);//array dependências



// ao carregar do componente
// loop infinito
useEffect(() => {
  return alert("fui desmontado,morri!!");
});//sem array dependências - programador esqueceu!