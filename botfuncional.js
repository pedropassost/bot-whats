const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.initialize();

client.on('message', async (message) => {
	if (message.body.toLocaleLowerCase() === 'ok') {
        }
    // licenciamento
    if (message.body.toLocaleLowerCase() === '1') {
        client.sendMessage(message.from, '*DIGITE O RENAVAM:*');
    }
    // transferencia
    if (message.body.toLocaleLowerCase() === '2') {
        client.sendMessage(message.from, '*DIGITE O RENAVAM:*');
    }
    // emprestimo
    if (message.body.toLocaleLowerCase() === '3') {
        client.sendMessage(message.from, '*VALOR E EM QUANTAS VEZES? $*');
    }
    // ANTT
    if (message.body.toLocaleLowerCase() === '4') {
        client.sendMessage(message.from, '*ANTT*');
    }
    // VISTORIA CAUTELAR
    if (message.body.toLocaleLowerCase() === '5') {
        client.sendMessage(message.from, '*VISTORIA CAUTELAR*');
    }
    // RENOVAÇÃO DE CNH
    if (message.body.toLocaleLowerCase() === '6') {
        client.sendMessage(message.from, '*RENOVAÇÃO DE CNH*');
    }
    // CONTRATO DE COMPRA E VENDA DE VEICULO
    if (message.body.toLocaleLowerCase() === '7') {
        client.sendMessage(message.from, '*CONTRATO DE COMPRA E VENDA DE VEÍCULO*');
    }
});