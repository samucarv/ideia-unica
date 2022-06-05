import React from 'react';
import Image from 'next/image';


function Home(){
    return <html>
    <head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
    </head>
    <body>
    
    <nav class="navbar navbar-dark bg-dark">
    <font color="white"><center> CONTROLE DE IPTUS</center>  </font>  
    </nav>

    
    
   
    <table class="table table-striped" >
  <thead>
    <tr>
      <th scope="col">LOCADOR</th>
      <th scope="col">LOCATÁRIO</th>    
      <th scope="col">ENDEREÇO</th>
      <th scope="col">CCI</th>  
      <th scope="col">SANEAGO</th>
      <th scope="col">ENEL</th>  
    </tr>
  </thead>
  <tbody>
    <tr class="table-danger">
      <th scope="row">LUCIANO</th>
      <td>ANDRE LUIZ / DENISE</td>
      <td>RUA.01 Q.01 L.10,  R. IPES</td>
      <td>44559</td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <th scope="row">LUCIANO</th>
      <td>ALINE RENATO</td>
      <td>RUA. 02, L 17, Q 02, P. JATOBAS (CASA 2)</td>
      <td>41037</td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <th scope="row">LUCIANO</th>
      <td>MARIA PAULA / EDSON</td>
      <td>RUA. 02, L 17, Q 02, P. JATOBAS (CASA 1)</td>
      <td>41037</td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <th scope="row">LUCIANO</th>
      <td>OSMAR PONCE</td>
      <td>Rua 01, qd 01, lt 11,R. IPES</td>
      <td>44561</td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <th scope="row">LUCIANO</th>
      <td>HUMBERTO</td>
      <td>RUA 01, L 02, Q 01, R. IPES</td>
      <td>44570</td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <th scope="row">LUCIANO</th>
      <td>DONA ILMA</td>
      <td>RUA 02, Q 06, L 05, R.IPES</td>
      <td>44639</td>
      <td></td>
      <td></td>
    </tr>
  
    <tr>
      <th scope="row">VITOR BIOLCHI</th>
      <td>MARCELO</td>
      <td>RUA 02, Q 06, L 03, R.IPES</td>
      <td>44637</td>
      <td></td>
      <td></td>
    </tr>
   
    <tr>
      <th scope="row">ANITA</th>
      <td>AMARA</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <th scope="row">HERBERTO</th>
      <td>WALACE</td>
      <td>Rua Alameda Amazonas Qd 96 Lt 01 - St. M. do Sol - Apto 1903 Torre 1</td>
      <td>75312</td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <th scope="row">MARCELO BARBOSA</th>
      <td>BETO / ALINE</td>
      <td>R 04, qd 02, lt 07 R Parque dos Ipes</td>
      <td>44580</td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <th scope="row">AMÁLIA</th>
      <td>CAMILA</td>
      <td>Rua 06, qd 01, lt 14 R Parque Ipes</td>
      <td>44565</td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <th scope="row">AMÁLIA</th>
      <td>GUILHERME</td>
      <td>RUA 5 QD 6 LT 10 CASA 4 - PARQUE DOS JATOBAS</td>
      <td>44513</td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <th scope="row">AMÁLIA</th>
      <td>NAIRA</td>
      <td>Rua Alameda Amazonas Qd 96 Lt 01 - St. M. do Sol - Apto 1702 Torre 2</td>
      <td>75420</td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <th scope="row">JORGE</th>
      <td>LETÍCIA / SACHA</td>
      <td>S. Universt. r U-10 q3 lt 8 apto 103</td>
      <td>66731</td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <th scope="row">IVAN PERUZO</th>
      <td>ROBSON / VIRGINIA</td>
      <td>Rua Alameda Amazonas Qd 96 Lt 01 - St. M. do Sol - Apto 2005 Torre 4</td>
      <td>78909</td>
      <td></td>
      <td></td>
    </tr>
    
    <tr>
      <th scope="row">IVAN PERUZO</th>
      <td>ANDRE SCHWENING</td>
      <td>A1,q 10, lote 07- ap 601, Edificio Elevado Flamboyant</td>
      <td>74420</td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <th scope="row">EMERSON CARLIS</th>
      <td>CARLOS FREDERICO</td>
      <td>Avenida 01, Qd. 06 Lt. 10 R. Parque dos ipes</td>
      <td>44616</td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <th scope="row">SEVERINO</th>
      <td>MAURO</td>
      <td>Rua  Rodezir Baylao, 07, quadra 47, lote 06, bairro Vila Maria</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <th scope="row">SEVERINO</th>
      <td>MARCELINHO</td>
      <td>Rua 21, quadra 47, lotes  01/06 na Vila Maria</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <th scope="row">ERALDO</th>
      <td>HELIAR</td>
      <td>rua U3, q 12, lt 11 B. Universitario</td>
      <td>13711</td>
      <td></td>
      <td></td>
    </tr>
    
    <tr>
      <th scope="row">RONALDINHO</th>
      <td>KARLA</td>
      <td>Rua  Dos Guaranis, qd 20, lt 05,  Pq das Laranjeiras </td>
      <td>40621</td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <th scope="row">RENATO BUENO</th>
      <td>ANDRE LUIZ</td>
      <td>Pq dos Jatobas r 5 q6 lt 10 casa 6</td>
      <td>44314</td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <th scope="row">JORGE</th>
      <td>IVAN / MELINA</td>
      <td>Rua Alameda Amazonas Qd 96 Lt 01 - St. M. do Sol - Apto 1006 Torre 3</td>
      <td>78728</td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <th scope="row">FABIO POSSATO</th>
      <td>JULIANE / LUCAS</td>
      <td>Rua Alameda Amazonas Qd 96 Lt 01 - St. M. do Sol - Apto 804 Torre 4</td>
      <td>78836</td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <th scope="row">NECO</th>
      <td>SAMUEL</td>
      <td>RUA 139 QD. LT. - PARQUE DAS LARANJEIRAS</td>
      <td>23230</td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <th scope="row">GELSON</th>
      <td>JACIRA</td>
      <td>RUA 139 QD. LT. - PARQUE DAS LARANJEIRAS</td>
      <td>67957</td>
      <td></td>
      <td></td>
    </tr>

  </tbody>
</table>


   
    
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    
    
    </body>
    
    </html>


}
    

export default Home

