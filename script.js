$(document).ready(function () {
    $(document).on('click', '.removeInputBtn', function () {
        $(this).closest('tr').remove()
    })
    $('#addRowBtn').click(function () {
        var newRowHtml = `
                                                                                                                                                                                  <tr>
                                                                                                                                                                                      <td><input type="text" class="form-control eventName" placeholder="Enter Event Name..."></td>
                                                                                                                                                                                      <td><input type="text" class="form-control eventDate" placeholder="Enter Date here..."></td>
                                                                                                                                                                                      <td><input type="text" class="form-control participated" placeholder="Choose the Options..."></td>
                                                                                                                                                                                      <td><input type="text" class="form-control prize" placeholder="Choose the Options..."></td>
                                                                                                                                                                                      <td><input type="text" class="form-control proof" placeholder="Enter Proof here ..."></td>
                                                                                                                                                                                      <td><input type="text" class="form-control pageNumber" placeholder="Enter Proof Page Number..."></td>
                                                                                                                                                                                      <td>
                                                                                                                                                                                      <a type="button" class="btn btn-sm btn-danger removeInputBtn">Remove</a>
                                                                                                                                                                                      </td>
                                                                                                                                                                                  </tr>
                                                                                                                                                                                  `
        $('table.table tbody').append(newRowHtml)
    })
    /*
                                                                            $('.getValuesBtn').click(function () {
                                                                              var inputData = []
                                                                              $('table.table tbody tr').each(function () {
                                                                                var rowValues = {}
                                                                                $(this)
                                                                                  .find('input')
                                                                                  .each(function () {
                                                                                    rowValues[$(this).attr('class').split(' ')[1]] = $(this).val()
                                                                                  })
                                                                                inputData.push(rowValues)
                                                                              })
                                                                              // var jsonData = JSON.stringify(inputData)
                                                                              // console.log(jsonData)
                                                                              //   $.ajax({
                                                                              //     type: 'POST',
                                                                              //     url: '/submit_data',
                                                                              //     data: jsonData,
                                                                              //     contentType: 'application/json',
                                                                              //     success: function (response) {
                                                                              //       console.log(`success :`,response)
                                                                              //     },
                                                                              //     error: function (error) {
                                                                              //       console.error(error)
                                                                              //     }
                                                                          
                                                                              // for (var i = 0; i < inputData.length; i++) {
                                                                              //   var event = inputData[i]
                                                                              //   console.log('Event Name: ' + event.eventName)
                                                                              //   console.log('Event Date: ' + event.eventDate)
                                                                              //   console.log('Participated: ' + event.participated)
                                                                              //   console.log('Prize: ' + event.prize)
                                                                              //   console.log('Proof: ' + event.proof)
                                                                              //   console.log('Page Number: ' + event.pageNumber)
                                                                              //   console.log('------------------------\n')
                                                                              // }
                                                                    
                                                                              
                                                                            // })
                                                                            */
    $('.getValuesBtn').click(function () {
        var inputData = []
        $('table.table tbody tr').each(function () {
            var rowValues = {}
            $(this)
                .find('input, select')
                .each(function () {
                    var fieldName = $(this).attr('class').split(' ')[1]
                    var fieldValue
                    if ($(this).is('select')) {
                        fieldValue = $(this).val()
                    } else {
                        fieldValue = $(this).val()
                    }
                    rowValues[fieldName] = fieldValue
                })
            inputData.push(rowValues)
        })
        var jsonData = JSON.stringify(inputData)
        // console.log(inputData)
        // for (var i = 0; i < inputData.length; i++) {
        //     var event = inputData[i]
        //     console.log('Event Name: ' + event.eventName)
        //     console.log('Event Date: ' + event.eventDate)
        //     console.log('Participated: ' + event.participated)
        //     console.log('Prize: ' + event.prize)
        //     console.log('Proof: ' + event.proof)
        //     console.log('Page Number: ' + event.pageNumber)
        //     console.log('------------------------\n')
        // }
        $.ajax({
            type: 'POST',
            url: '/submit_data',
            data: JSON.stringify(jsonData),
            contentType: 'application/json',
            success: function (response) {
                console.log(`success :`, response)
            },
            error: function (error) {
                console.error(error)
            }
        })
    })
})

