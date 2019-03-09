<?php
namespace Home\Controller;

use Think\Controller;

class IndexController extends Controller
{
    public function index()
    {
        $dir = dirname(__FILE__);
        $regex = $_GET['regex'];
        $test = $_GET['test'];

        exec("$dir/Regex-Resolver/output '$regex' '$test'", $result);

        $this->ajaxReturn(
            array('result'=> $result[0])
        );
    }
}
