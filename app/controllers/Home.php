<?php

class Home extends Controller{
	
    public function index($awal="", $akhir=""){
      
        $data['judul']='Undangan Pernikahan';
    
        $data ['namapengirim']=$this->model('Hoome')->getAllMahasiswa();
    
        $data['awal']=$awal;
      $data['akhir']=$akhir;
        $this->view('templates/header',$data);
        $this->view('home/index',$data);
        $this->view('templates/footer');
    }
        



public function tambah(){
  if($this->model('Hoome')->tambahkomentar($_POST)>0)
  {
      Flasher::setFlash('Berhasil','Tambahkan,','success');
  header('Location:'. BASEURL.'/home');
  exit;
  } else{
  
      Flasher::setFlash('Gagal','Tambahkan','danger');
      header('Location:'. BASEURL.'/home');
      exit;
  }
  var_dump($_POST);
}

}