$(document).ready(function(){

   
    
    $('#Enregistrer').click(function(){

        //recupere les elements du form
        let titre = $('#Titre').val();
        let description = $('#Description').val();
        let date = new Date($('#dateFin').val());
        let priorite = $("#todo input:checked" ).val();

        //recupere l'ensemble des elements de ma todo list deja en place
        let listUL = document.getElementById('liste').querySelectorAll('li');
        let UL =document.getElementById('liste');
        //recupere le dernier id de li
        let lastId = $('#liste li:last-child()').attr('id');
        lastId=(parseInt(lastId)+1).toString();
        
        //cree les differentes balises (li>input>span.titre>span.date>span.description)
        let listeli = document.createElement('li');
        let inputCheckbox = document.createElement('input');
        let spanTitre = document.createElement('span');
        let spanDate = document.createElement('span');
        let spanDescription = document.createElement('span');

        //reformatte la date
        let msgDate = date.getDay()+"/"+date.getMonth()+"/"+date.getFullYear();
        
        //met en forme la balise li
        $(listeli).attr('id', lastId);
        $(listeli).addClass(priorite);

        //mise en forme de la checkbox
        $(inputCheckbox).attr('type',"checkbox");
        $(inputCheckbox).addClass("checkbox");

        //mise en forme du span titre
        $(spanTitre).addClass('titres');
        $(spanTitre).html(titre);

        //mise en forme du span date 
        $(spanDate).addClass('dateDeFin');
        $(spanDate).attr('data-date',msgDate);
        $(spanDate).html('En retard');
       

        //mise en forme du span description
        $(spanDescription).addClass('description');
        $(spanDescription).html(description);

        //ajout des elements ensemble
        $(listeli).append($(inputCheckbox));
        $(listeli).append($(spanTitre));
        $(listeli).append($(spanDate));
        $(listeli).append($(spanDescription));
        $(UL).append($(listeli));
        potitefnt();

    })


    $( "#liste" ).on( "click", '.checkbox',function(){
        let checkbox = $('.checkbox');
        let liste = document.getElementById('liste').querySelectorAll('li');
        for (let i=0; i<$(checkbox).length; i++) {
            let checkboxI =checkbox[i];
            let listeTitres =liste[i].querySelector('.titres');
            if($(checkboxI).is(':checked')){
                $(listeTitres).addClass('textBarre');
            }else{
                $(listeTitres).removeClass('textBarre');
            }
        }
    })

    function potitefnt(){
        var CurrentDate = new Date();
        var SelectedDate = new Date($("[data-date]"));
        if(CurrentDate > SelectedDate) {
            $(".dateDeFin").show();
        } else {
                $(".dateDeFin").hide();
        }
    };

    /* ESPACE pour toto*/
    $('#Supprimer').click(function(){
        console.log('patate')
        $("#liste input:checked").parent('li').remove();
    });


    setInterval(potitefnt,5*60*1000);

    $("#liste").on('mouseenter',".titres",function (){
        console.log('patate')
        $(this).next().next().show();
    });
    $("#liste").on('mouseleave',".titres",function (){
        $(this).next().next().hide();
    });

///Ne pas supprimer
    potitefnt()
});


///laisse moi tranquillou



///'Et on dit premier gaou n'est pas gaou oh
///C'est deuxième gaou qui est niata oh ah

///On dit premier gaou n'est pas gaou oh
///C'est deuxième gaou qui est niata oh ah'

/* <ul id="liste">
          <li id="0" class="normal">
            <input type="checkbox" name="" class="checkbox" /> 
            <span class="titres">Mort au rat pour chat voisin</span>
            <span class="dateDeFin" data-date="12/12/2022">En retard</span>
            <span class="Descriptions">Mort d'un petit rat de campagne</span>
        </li>
        </ul>*/
