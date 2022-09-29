<?php
class Flasher{
public static function setFlash($pesan,$aksi,$tipe)
{
$_SESSION['flash']=[
    'pesan'=>$pesan,
    'aksi'=>$aksi,
    'tipe'=>$tipe,
];

}

public static function flash()
{
if(isset($_SESSION['flash'])){

echo' 
<style> .alert{ text-align: center;} </style>
<div class="alert alert-'.$_SESSION['flash']['tipe'].' alert-dismissible fade show" role="alert">
 Ucapan Telah   <strong> '.$_SESSION['flash']['pesan'].'</strong> Kamu '.$_SESSION['flash']['aksi'].' Terimakasih.
 
  </button>
</div>';
unset($_SESSION['flash']);
}
}


















}

