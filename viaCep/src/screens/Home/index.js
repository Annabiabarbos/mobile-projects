import { useEffect, useState } from "react";
import { BoxInput } from "../../components/BoxInput";
import { ContainerForm, RowContainer, ScrollForm } from "./style";
import { Alert } from "react-native";
import { Axios } from "react-native-axios";
import { api } from "../../services/api";


export function Home() {



  //Hooks - states
  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("")
  const [bairro, setBairro] = useState("")
  const [cidade, setCidade] = useState("")
  const [estado, setEstado] = useState("")
  const [uf, setUf] = useState("")



  //Hooks - effects

  useEffect(() => {
    //Chama da API
  }, [cep])

  async function loadAdress() {
    try {

      const dados = (await api.get(`${cep}/json`))

      const endereco = await dados.data

      setLogradouro(endereco.logradouro);
      setBairro(endereco.bairro);
      setCidade(endereco.localidade)
      setEstado(endereco.estado)
      setUf(endereco.uf)

    }
    catch (error) {
      alert(error)
    }
  }




  return (
    //ScrollForm
    //ContainerForm
    //BoxInput
    //Label
    //Input
    <ScrollForm>
      <ContainerForm>
        <BoxInput
          textLabel="Informe o cep"
          placeholder="Exemplo"
          fieldValue={cep}
          editable={true}
          maxLength={8}
          onChangeText={setCep}
          onBlur = {loadAdress}
          keyboardType='numeric'
        />
        <BoxInput
          textLabel="Logradouro"
          placeholder="Logradouro..."
          maxLength={50}
          minLength={0}
          fieldValue={logradouro}
        />
        <BoxInput
          textLabel="Bairro"
          placeholder="Bairro..."
          maxLength={50}
          minLength={0}
          fieldValue={bairro}
        />
        <BoxInput
          textLabel="Cidade"
          placeholder="Cidade..."
          maxLength={50}
          minLength={0}
          fieldValue={cidade}
        />

        <RowContainer>
          <BoxInput
            textLabel="Estado"
            placeholder="Estado..."
            fieldWidth={70}
            fieldValue={estado}
          />
          <BoxInput
            textLabel="UF"
            placeholder="UF..."
            fieldWidth={23}
            fieldValue={uf}
          />
        </RowContainer>
      </ContainerForm>
    </ScrollForm>
  );
};

/*// ao carregar do componente
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
});//sem array dependências - programador esqueceu!*/