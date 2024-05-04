import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity, Alert, Pressable } from "react-native";

import styles from "../form/style";

const Cadastro = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [email, setEmail] = useState(null);

    function closeModalAndEnviaEmail(){
        if(email != null){
            setModalVisible(modalVisible);
            emailEnviadoComSucesso()
            setEmail(null)
        } else {
            createAlert
        }
    }
    const emailEnviadoComSucesso = () => Alert.alert(
        "Sucesso!",
        "Você recebera um e-mail para recuperação de senha"
    );
    const createAlert = () => Alert.alert(
        "Oops!",
        "É necessario preencher o campo com seu e-mail!"
    );

    return(
        <View style={styles.centeredView}>
            <modal
                animatonType= "slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalVisible}>
                        <text style={styles.modalText}>
                            Olâ querido aluno.
                            Seu trabalho vai ser criar Modal para recuperar a senha!
                            LEMBRE! Você vai ter abrir esse modal dentro da tela de long.
                        </text>
                        <TextInput
                            style={[styles.button, styles.buttonClose]}
                            onChangeText={setEmail}
                            value={email}
                            placeholder="digite seu e-mail"
                        />
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => closeModalAndEnviaEmail}>
                                <Text style={styles.textStyle}>Enviar</Text>
                        </Pressable>
                    </View>
                </View>
            </modal>
            <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(true)}>
               <Text style={styles.textStyle}>Exibir Modal</Text>
            </Pressable>   
        </View>
    )
}
export default Cadastro;