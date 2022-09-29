<?php


class Hoome{

private $table ='mahasiswa';
private $db;



public function __construct()
{
$this->db=new Database;
}


public function getAllMahasiswa()
{

   $this->db->query('SELECT * FROM '.$this->table.' ORDER BY id DESC');
   return $this->db->resultSet();

}


public function tambahkomentar($data){

   $query ="INSERT INTO mahasiswa
Values

('',:nama,:komen)
";

$this->db->query($query);
$this->db->bind('nama', $data['nama']);
$this->db->bind('komen', $data['komen']);

$this->db->execute();

return $this->db->rowCount();

}


}