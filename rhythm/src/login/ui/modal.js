import {Modal} from 'antd-mobile';
const alert=Modal.alert

  

export default{
  showAlert :function() {
    const alertInstance = alert('律动', '账号或者密码错误', [
      { text: '取消', onPress: () => console.log('取消'), style: 'default' },
      { text: '确认', onPress: () => console.log('确认') },
    ]);
    setTimeout(() => {
      // 可以调用close方法以在外部close
      console.log('auto close');
      alertInstance.close();
    }, 500000);
  }
}
      
   

