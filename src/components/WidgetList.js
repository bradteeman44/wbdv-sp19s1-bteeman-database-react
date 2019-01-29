import React from 'react'

const WidgetList = () =>
    <div>
        <div class="container-fluid" id="savePreviewBar">
            <div class="row justify-content-end">
                <button class="btn btn-success" id="saveBtn">Save</button>
                <div id="previewBtn">
                    Preview: <label> <input name="a" type="radio"/> Yes
                </label> <label> <input name="a" type="radio" checked/> No
                </label>
                </div>
            </div>
        </div>
        <div class="container-fluid wbdv-heading-widget" id="widgetHeading">
            <div class="row">
                <div class="col-sm-4">
                    <h3>Heading Widget</h3>
                </div>
                <div class="col-sm-1-content-end">
                    <button class="btn" id="arrowBtnUp">
                        <i class="fas fa-arrow-up"></i>
                    </button>
                </div>
                <div class="col-sm-1-content-end">
                    <button class="btn" id="arrowBtnDown">
                        <i class="fas fa-arrow-down"></i>
                    </button>
                </div>
                <div class="col-sm-2">
                    <select class="form-control" id="role">
                        <option value="HEADING">Heading</option>
                        <option value="PARAGRAPH">Paragraph</option>
                        <option value="LIST">List</option>
                        <option value="IMAGE">Image</option>
                        <option value="LINK">Link</option>
                    </select>
                </div>
                <div class="col-sm-1-content-end">
                    <button class="btn" id="closeBtn">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            </div>
            <form>
                <div class="form-group row">
                    <label for="headingTextFld"></label> <input type="text"
                                                                class="form-control wbdv-headingText-fld"
                                                                id="headingTextFld"
                                                                placeholder="Heading text"/>
                </div>
                <div class="form-group row">
                    <label for="headingSize"></label>
                    <div class="col-sm-12" id="headingSize">
                        <select class="form-control" id="headingSizeSel">
                            <option>Choose size</option>
                            <option value="HEADING 1">Heading 1</option>
                            <option value="HEADING 2">Heading 2</option>
                            <option value="HEADING 3">Heading 3</option>
                        </select>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="widgetNameFld"></label> <input type="text"
                                                               class="form-control wbdv-widgetName-fld"
                                                               id="widgetNameFld"
                                                               placeholder="Widget name"/>
                </div>
            </form>
            <h4>Preview</h4>
            <div class="wbdv-preview-text">Heading text</div>
        </div>
        <div class="container-fluid wbdv-para-widget" id="widgetPara">
            <div class="row">
                <div class="col-sm-4">
                    <h3>Paragraph Widget</h3>
                </div>
                <div class="col-sm-1-content-end">
                    <button class="btn" id="arrowBtnUp">
                        <i class="fas fa-arrow-up"></i>
                    </button>
                </div>
                <div class="col-sm-1-content-end">
                    <button class="btn" id="arrowBtnDown">
                        <i class="fas fa-arrow-down"></i>
                    </button>
                </div>
                <div class="col-sm-2">
                    <select class="form-control" id="role">
                        <option value="HEADING">Paragraph</option>
                        <option value="PARAGRAPH">Heading</option>
                        <option value="LIST">List</option>
                        <option value="IMAGE">Image</option>
                        <option value="LINK">Link</option>
                    </select>
                </div>
                <div class="col-sm-1-content-end">
                    <button class="btn" id="closeBtn">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            </div>
            <form>
                <div class="form-group row">
                    <label for="paraTextFld"></label>
                    <textarea id="paraTextFld" placeholder="Lorem ipsum" rows="5"
                              cols="200">
									Lorem ipsum
								</textarea>
                </div>
                <div class="form-group row">
                    <label for="widgetNameFld"></label> <input type="text"
                                                               class="form-control wbdv-widgetName-fld"
                                                               id="widgetNameFld"
                                                               placeholder="Widget name"/>
                </div>
            </form>
            <h4>Preview</h4>
            <div class="wbdv-preview-text">Lorem ipsum</div>
        </div>
        <div class="container-fluid" id="widgetList">
            <div class="row">
                <div class="col-sm-4">
                    <h3>List Widget</h3>
                </div>
                <div class="col-1-content-end">
                    <button class="btn" id="arrowBtnUp">
                        <i class="fas fa-arrow-up"></i>
                    </button>
                </div>
                <div class="col-sm-1-content-end">
                    <button class="btn" id="arrowBtnDown">
                        <i class="fas fa-arrow-down"></i>
                    </button>
                </div>
                <div class="col-sm-2">
                    <select class="form-control" id="role">
                        <option value="HEADING">List</option>
                        <option value="PARAGRAPH">Paragraph</option>
                        <option value="LIST">Heading</option>
                        <option value="IMAGE">Image</option>
                        <option value="LINK">Link</option>
                    </select>
                </div>
                <div class="col-sm-1-content-end">
                    <button class="btn" id="closeBtn">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            </div>
            <form>
                <div class="form-group row">
                    <label for="listTextFld"></label>
                    <textarea id="listTextFld" rows="5" cols="200">
									Put each
									Item in
									a separate row
								</textarea>
                </div>
                <div class="form-group row">
                    <label for="listType"></label>
                    <div class="col-sm-12" id="listType">
                        <select class="form-control" id="listTypeSel">
                            <option value="UNORDERED">Unordered list</option>
                            <option value="ORDERED">Ordered list</option>
                        </select>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="widgetNameFld"></label> <input type="text"
                                                               class="form-control wbdv-widgetName-fld"
                                                               id="widgetNameFld"
                                                               placeholder="Widget name"/>
                </div>
            </form>
            <h4>Preview</h4>
            <div class="wbdv-preview-text">
                <ul>
                    <li>Put each</li>
                    <li>Item in</li>
                    <li>a seperate row</li>
                </ul>
            </div>
        </div>
        <div class="container-fluid" id="widgetImg">
            <div class="row">
                <div class="col-sm-4">
                    <h3>Image Widget</h3>
                </div>
                <div class="col-1-content-end">
                    <button class="btn" id="arrowBtnUp">
                        <i class="fas fa-arrow-up"></i>
                    </button>
                </div>
                <div class="col-sm-1-content-end">
                    <button class="btn" id="arrowBtnDown">
                        <i class="fas fa-arrow-down"></i>
                    </button>
                </div>
                <div class="col-sm-2">
                    <select class="form-control" id="role">
                        <option value="HEADING">Image</option>
                        <option value="PARAGRAPH">Paragraph</option>
                        <option value="LIST">List</option>
                        <option value="IMAGE">Heading</option>
                        <option value="LINK">Link</option>
                    </select>
                </div>
                <div class="col-sm-1-content-end">
                    <button class="btn" id="closeBtn">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            </div>
            <form>
                <div class="form-group row">
                    <label for="imageURLFld"></label> <input type="url"
                                                             class="form-control wbdv-inmageURL-fld" id="imageURLFld"
                                                             placeholder="Image URL"/>
                </div>
                <div class="form-group row">
                    <label for="widgetNameFld"></label> <input type="text"
                                                               class="form-control wbdv-widgetName-fld"
                                                               id="widgetNameFld"
                                                               placeholder="Widget name"/>
                </div>
            </form>
            <h4>Preview</h4>
            <div class="wbdv-preview-img">
                <img height="200px" width="400px" alt="Image"
                     src="http://scd.france24.com/en/files/imagecache/france24_ct_api_bigger_169/article/image/BOLT-M_1.jpg">
                </img>
            </div>
        </div>
        <div class="container-fluid" id="widgetLink">
            <div class="row">
                <div class="col-sm-4">
                    <h3>Link Widget</h3>
                </div>
                <div class="col-sm-1-content-end">
                    <button class="btn" id="arrowBtnUp">
                        <i class="fas fa-arrow-up"></i>
                    </button>
                </div>
                <div class="col-sm-1-content-end">
                    <button class="btn" id="arrowBtnDown">
                        <i class="fas fa-arrow-down"></i>
                    </button>
                </div>
                <div class="col-sm-2">
                    <select class="form-control" id="role">
                        <option value="HEADING">Link</option>
                        <option value="PARAGRAPH">Paragraph</option>
                        <option value="LIST">List</option>
                        <option value="IMAGE">Image</option>
                        <option value="LINK">Heading</option>
                    </select>
                </div>
                <div class="col-sm-1-content-end">
                    <button class="btn" id="closeBtn">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            </div>
            <form>
                <div class="form-group row">
                    <label for="linkURLFld"></label> <input type="url"
                                                            class="form-control wbdv-linkURL-fld" id="linkURLFld"
                                                            placeholder="Link URL"/>
                </div>
                <div class="form-group row">
                    <label for="linkTextFld"></label> <input type="text"
                                                             class="form-control wbdv-linkText-fld" id="linkTextFld"
                                                             placeholder="Link text"/>
                </div>
                <div class="form-group row">
                    <label for="linkURL2Fld"></label> <input type="url"
                                                             class="form-control wbdv-linkURL2-fld" id="linkURL2Fld"
                                                             placeholder="Link URL"/>
                </div>
                <div class="form-group row">
                    <label for="widgetNameFld"></label> <input type="text"
                                                               class="form-control wbdv-widgetName-fld"
                                                               id="widgetNameFld"
                                                               placeholder="Widget name"/>
                </div>
            </form>
            <h4>Preview</h4>
            <div>
                <a href="#" class="wbdv-preview-link">Link text</a>
            </div>
        </div>
    </div>


export default WidgetList;